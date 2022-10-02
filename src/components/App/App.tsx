/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react'
import DataAPI from '../../api/DataAPI'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { DEFAULT_TASK_ITEM, setTasks } from '../../store/slices/todoListSlice'
import List from '../List/List'
import Panel from '../Panel/Panel'
import Search from '../Search/Search'
import s from './App.module.css'

function App() {
    const dispatch = useAppDispatch()
    // Локальное состояние для инпута поиска
    const [searchQuery, setSearchQuery] = useState('')

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
                <h2>ToDo List</h2>
                <p>
                    You have <b>{tasks.length}</b> task(s)
                </p>
            </div>
            <section className={s.secction}>
                <Panel task={DEFAULT_TASK_ITEM} />
                <Search value={searchQuery} setSearchQuery={setSearchQuery} />
            </section>
            <section className={s.secction}>
                <List />
            </section>
        </div>
    )
}

export default App
