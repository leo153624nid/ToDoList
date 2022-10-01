/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { useAppSelector } from '../../store/hooks/hooks'
import s from './App.module.css'

function App() {
    const { tasks } = useAppSelector((state) => state.todoList)
    return (
        <div className={s.page}>
            <div className={s.title}>
                <h1>ToDo List</h1>
                <p>
                    You have <b>{tasks?.length}</b> tasks
                </p>
            </div>
            <section className={s.secction}>1</section>
            <section className={s.secction}>2</section>
        </div>
    )
}

export default App
