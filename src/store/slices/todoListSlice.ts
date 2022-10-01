/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Task {
    id: string
    title: string
    description: string
    createdAt: number
    done: boolean
}

interface Tasks {
    tasks: Task[]
}

const initialState: Tasks = {
    tasks: [],
}

const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        setTasks(state, action: PayloadAction<Tasks>) {
            state.tasks = [...action.payload.tasks]
        },
        addTask(state, action: PayloadAction<Task>) {
            state.tasks = [...state.tasks, action.payload]
        },
        deleteTask(state, action: PayloadAction<Task>) {
            if (action.payload.id) {
                // del task by id
            }
        },
        updateTask(state, action: PayloadAction<Task>) {
            state.tasks = [...state.tasks, action.payload]
            // todo
        },
    },
})

export const { setTasks, addTask, deleteTask, updateTask } =
    todoListSlice.actions

export default todoListSlice.reducer
