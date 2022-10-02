/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios'
import { Task } from '../store/slices/todoListSlice'

const axiosInstance = axios.create({
    baseURL:
        'https://todolist-e933e-default-rtdb.europe-west1.firebasedatabase.app/',
})

const DataAPI = {
    // Получить данные
    getData() {
        return axiosInstance.get(`tasks.json`).then((response) => response.data)
    },
    // Добавить или Обновить данные задачи
    patchTask(updatedTask: Task) {
        return axiosInstance.patch(`tasks/3.json`, {
            ...updatedTask,
        })
    },
    // Удалить задачу
    deleteTask() {
        return axiosInstance.delete(`tasks/3.json`)
    },
}

export default DataAPI
