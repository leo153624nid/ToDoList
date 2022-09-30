/* eslint-disable no-param-reassign */
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

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<InitState>) {
            state.userName = action.payload.userName
            state.images = [...action.payload.images]
        },
        removeUser(state) {
            state.userName = ''
            state.images = []
        },
    },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
