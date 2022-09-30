import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Image {
    id: number
    url: string
}

interface InitState {
    userName: string
    images: Image[]
}

const initialState: InitState = {
    userName: '',
    images: [],
}

const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        setTodo(state, action: PayloadAction<InitState>) {
            state.userName = action.payload.userName
            state.images = [...action.payload.images]
        },
        removeTodo(state) {
            state.userName = ''
            state.images = []
        },
    },
})

export const { setTodo, removeTodo } = todoListSlice.actions

export default todoListSlice.reducer
