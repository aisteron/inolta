import { configureStore } from '@reduxjs/toolkit'
import inoltaReducer from './inoltaSlice'

export const store = configureStore({
  reducer: {
    mv: inoltaReducer
  },
})