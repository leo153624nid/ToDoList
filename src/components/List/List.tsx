/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import { useAppSelector } from '../../store/hooks/hooks'
import { Task } from '../../store/slices/todoListSlice'
import Panel from '../Panel/Panel'
import TaskItem from '../TaskItem/TaskItem'
import s from './List.module.css'

interface ListProps {
    searchQuery: string
}

function List({ searchQuery }: ListProps) {
    const { tasks } = useAppSelector((state) => state.todoList)
    let sortedTasks = []

    // Проверка на наличие поискового запроса
    if (searchQuery) {
        sortedTasks = [
            ...tasks.filter((elem) => elem.title.includes(searchQuery)),
        ]
    } else {
        sortedTasks = [...tasks]
    }

    // локальное состояние для перехода к редактированию задачи
    const [taskForEdit, setTaskForEdit] = useState<Task | null>(null)

    return (
        <div className={s.list_container}>
            {!sortedTasks.length && (
                <div className={s.noTasks}>
                    <b>no tasks</b>
                </div>
            )}
            {sortedTasks.map((elem) => {
                if (elem.id === taskForEdit?.id)
                    return (
                        <Panel
                            key={elem.id}
                            task={elem}
                            setTaskForEdit={setTaskForEdit}
                        />
                    )
                return (
                    <TaskItem
                        key={elem.id}
                        task={elem}
                        setTaskForEdit={setTaskForEdit}
                    />
                )
            })}
        </div>
    )
}

export default List
