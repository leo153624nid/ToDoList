/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import todoListReducer from './slices/todoListSlice'

const store = configureStore({
    reducer: { todoList: todoListReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
