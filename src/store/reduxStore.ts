import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userReducer from './slices/userSlice'
import imageReducer from './slices/imgSlice'

const store = configureStore({
    reducer: { user: userReducer, image: imageReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
