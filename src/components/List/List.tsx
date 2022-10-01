/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { useAppSelector } from '../../store/hooks/hooks'
import TaskItem from '../TaskItem/TaskItem'
import s from './List.module.css'

function List() {
    const { tasks } = useAppSelector((state) => state.todoList)
    return (
        <div className={s}>
            {tasks.map((elem) => (
                <TaskItem key={elem.id} task={elem} />
            ))}
        </div>
    )
}

export default List
