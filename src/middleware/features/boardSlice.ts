import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLatLon } from '../../services/geo'
import { message } from 'antd'
import { getWeather } from '../../services/weather'
import store from '../store'
import { addHistory } from './historySlice'

export const searchWeather = createAsyncThunk(
  'board/searchWeather',
  async (payload: any, { rejectWithValue }) => {
    console.log('fefe')
    const { city, type } = payload
    const { lat, lon } = await getLatLon(city)
    if (!lat || !lon) {
      message.error('Not found')
      return rejectWithValue('Not found')
    }
    const weather = await getWeather(lat, lon)
    if (!weather) return rejectWithValue('No weather')
    const { title, temperature, humidity, description, country, timestamp } =
      weather

    if (type === 'new') {
      store.dispatch(
        addHistory({
          city,
          country,
          timestamp,
        })
      )
    }

    return {
      title,
      temperature,
      humidity,
      description,
      city,
      country,
      timestamp,
    }
  }
)

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    isInited: false,
    city: '',
    country: '',
    title: '',
    description: '',
    temperature: '',
    humidity: '',
    timestamp: '',
  },
  reducers: {},
  extraReducers: {
    [searchWeather.fulfilled.type]: (state, { payload }) => {
      state.isInited = true
      state.city = payload.city ?? ''
      state.country = payload.country ?? ''
      state.title = payload.title ?? ''
      state.description = payload.description ?? ''
      state.temperature = payload.temperature ?? ''
      state.humidity = payload.humidity ?? ''
      state.timestamp = payload.timestamp ?? ''
    },
    [searchWeather.rejected.type]: (state, { payload }) => {},
  },
})

export default boardSlice.reducer
