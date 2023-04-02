import { configureStore } from '@reduxjs/toolkit'
import board from './features/boardSlice'
import history from './features/historySlice'
const store = configureStore({
  reducer: {
    board,
    history,
  },
})

export default store
