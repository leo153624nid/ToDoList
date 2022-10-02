/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react'
import DataAPI from '../../api/DataAPI'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import {
    DEFAULT_TASK_ITEM,
    setTasks,
    Task,
} from '../../store/slices/todoListSlice'
import List from '../List/List'
import Panel from '../Panel/Panel'
import Search from '../Search/Search'
import s from './App.module.css'

function App() {
    const dispatch = useAppDispatch()
    // Локальное стостояние загрузки данных
    const [isFetching, setIsFetching] = useState(true)
    // Локальное состояние для инпута поиска
    const [searchQuery, setSearchQuery] = useState('')

    // Получаем данные при загрузке страницы
    useEffect(() => {
        DataAPI.getData()
            .then((data: Task[]) => {
                dispatch(
                    setTasks({
                        tasks: [...Array.from(data)],
                    })
                )
                setIsFetching(false)
            })
            .catch((error) => {
                console.log(error)
                alert('Данные не получены')
            })
    }, [dispatch])

    const { tasks } = useAppSelector((state) => state.todoList)

    return (
        <div className={s.page}>
            {isFetching && (
                <div className={s.title}>
                    <h2>ToDo List</h2>
                    <p>
                        <b>...loading data</b>
                    </p>
                </div>
            )}

            {!isFetching && (
                <div>
                    <div className={s.title}>
                        <h2>ToDo List</h2>
                        <p>
                            You have <b>{tasks.length}</b> task(s)
                        </p>
                    </div>

                    <section className={s.section}>
                        <Panel task={DEFAULT_TASK_ITEM} />
                        <Search
                            value={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                    </section>

                    <section className={s.section}>
                        <List searchQuery={searchQuery} />
                    </section>
                </div>
            )}
        </div>
    )
}

export default App
