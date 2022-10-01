/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react'
import DataAPI from '../../api/DataAPI'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { setTasks } from '../../store/slices/todoListSlice'
import s from './App.module.css'

function App() {
    const dispatch = useAppDispatch()

    // Получаем данные при загрузке страницы
    useEffect(() => {
        // Проверяем, сохранены ли задачи в браузере
        // const tasksLocalStorage = localStorage.getItem('tasks')
        //     ? (localStorage.getItem('email') as string)
        //     : ''
        DataAPI.getData()
            .then((data) => {
                dispatch(
                    setTasks({
                        tasks: [...data],
                    })
                )
            })
            .catch((error) => {
                console.log(error)
                alert('Данные не получены')
            })
    }, [dispatch])

    const { tasks } = useAppSelector((state) => state.todoList)
    return (
        <div className={s.page}>
            <div className={s.title}>
                <h1>ToDo List</h1>
                <p>
                    You have <b>{tasks.length}</b> task(s)
                </p>
            </div>
            <section className={s.secction}>1</section>
            <section className={s.secction}>2</section>
        </div>
    )
}

export default App
