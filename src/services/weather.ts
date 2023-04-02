import { WEATHER_URL } from '../utils/constant'
import request from '../utils/request'
import { OPEN_WEATHER_REQUEST_KEY } from '../utils/key'

export const getWeather = async (lat: string, lon: string) => {
  const api = `${WEATHER_URL}weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_REQUEST_KEY}`
  const res = await request.get({
    api,
  })
  if (res.status === 200) {
    const data = res.data
    const title = data?.weather?.[0]?.['main'] ?? ''
    const temperature = data?.main?.temp ?? ''
    const humidity = data?.main?.humidity ?? ''
    const description = data?.weather?.[0]?.['description'] ?? ''
    const country = data?.sys?.['country']
    const timestamp = Date.now()
    return {
      title,
      temperature,
      humidity,
      description,
      country,
      timestamp,
    }
  }
  return {}
}
