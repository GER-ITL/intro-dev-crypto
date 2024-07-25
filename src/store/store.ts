import { combineReducers, configureStore } from '@reduxjs/toolkit'
import exampleSlice from './slices/exampleSlice'

const rootReducer = combineReducers({
	exampleSlice,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
