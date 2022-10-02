/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios'
import { Task } from '../store/slices/todoListSlice'
// import { Comment } from '../store/slices/todoListSlice'

const axiosInstance = axios.create({
    baseURL:
        'https://todolist-e933e-default-rtdb.europe-west1.firebasedatabase.app/',
    // todo
})

const DataAPI = {
    // Получить данные
    getData() {
        return axiosInstance.get(`tasks.json`).then((response) => response.data)
    },
    // Добавить или Обновить данные задачи
    patchTask(updatedTask: Task, index: number) {
        return axiosInstance.patch(`tasks/${index}.json`, {
            ...updatedTask,
        })
    },
    // Удалить задачу
    deleteTask(index: number) {
        return axiosInstance.delete(`tasks/${index}.json`)
    },
}

export default DataAPI
