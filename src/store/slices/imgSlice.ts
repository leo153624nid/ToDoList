import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Image } from './userSlice'

export interface Comment {
    id: number
    text: string
    date: number
}

export interface ImageData extends Image {
    comments: Comment[]
}

interface InitState {
    imageData: ImageData
}

const initialState: InitState = {
    imageData: {
        id: 0,
        url: '',
        comments: [],
    },
}

const imgSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setImageData(state, action: PayloadAction<InitState>) {
            state.imageData.id = action.payload.imageData.id
            state.imageData.url = action.payload.imageData.url
            state.imageData.comments = action.payload.imageData.comments
        },
        clearImageData(state) {
            state.imageData.id = 0
            state.imageData.url = ''
            state.imageData.comments = []
        },
        postImageComment(state, action: PayloadAction<InitState>) {
            state.imageData.comments.push(action.payload.imageData.comments[0])
        },
    },
})

export const { setImageData, clearImageData, postImageComment } =
    imgSlice.actions

export default imgSlice.reducer
