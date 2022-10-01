/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Task {
    id: string
    title: string
    description: string
    createdAt: number
    done: boolean
}

export const DEFAULT_TASK_ITEM: Task = {
    id: '',
    title: '',
    description: '',
    createdAt: 0,
    done: false,
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
            state.tasks.push(action.payload)
        },
        deleteTask(state, action: PayloadAction<Task>) {
            state.tasks = [
                ...state.tasks.filter((elem) => elem.id !== action.payload.id),
            ]
        },
        updateTask(state, action: PayloadAction<Task>) {
            state.tasks = [...state.tasks, action.payload]
            // todo
        },
        checkTask(state, action: PayloadAction<Task>) {
            state.tasks = [
                ...state.tasks.map((elem) => {
                    if (elem.id === action.payload.id) {
                        return { ...elem, done: action.payload.done }
                    }
                    return elem
                }),
            ]
        },
    },
})

export const { setTasks, addTask, deleteTask, updateTask, checkTask } =
    todoListSlice.actions

export default todoListSlice.reducer
