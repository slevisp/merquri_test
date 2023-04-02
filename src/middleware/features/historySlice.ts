import { createSlice } from '@reduxjs/toolkit'
import localStorage from '../../utils/localStorage'
import { LOCALSTORAGE_HISTORY_KEY } from '../../utils/key'

const historySlice = createSlice({
  name: 'history',
  initialState: {
    list: [],
  },
  reducers: {
    initHistory(state) {
      const localList = localStorage.get(LOCALSTORAGE_HISTORY_KEY)
      state.list = localList
    },
    addHistory(state: any, { payload }) {
      const { city, country, timestamp } = payload
      state.list.push({
        city,
        country,
        timestamp,
      })
    },
    deleteHistory(state: any, { payload }) {
      const { timestamp } = payload
      state.list = state.list.filter(
        (history: any) => history.timestamp !== timestamp
      )
    },
  },
})
// todo refactor code add parameter type
export const { initHistory, addHistory, deleteHistory } = historySlice.actions
export default historySlice.reducer
