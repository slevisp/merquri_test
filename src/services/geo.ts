import { GEO_URL } from '../utils/constant'
import request from '../utils/request'
import { OPEN_WEATHER_REQUEST_KEY } from '../utils/key'

export const getLatLon = async (city: string) => {
  const api = `${GEO_URL}direct?q=${city}&limit=1&appid=${OPEN_WEATHER_REQUEST_KEY}`
  const res = await request.get({
    api,
  })
  if (res.status === 200) {
    const result = res.data
    if (result.length === 0) return {}

    const data = result[0]
    return {
      lat: data?.lat,
      lon: data?.lon,
    }
  }
  return {}
}
