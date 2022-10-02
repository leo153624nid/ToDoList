/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import { useAppSelector } from '../../store/hooks/hooks'
import { Task } from '../../store/slices/todoListSlice'
import Panel from '../Panel/Panel'
import TaskItem from '../TaskItem/TaskItem'
import s from './List.module.css'

function List() {
    const { tasks } = useAppSelector((state) => state.todoList)
    // локальное состояние для перехода к редактированию задачи
    const [taskForEdit, setTaskForEdit] = useState<Task | null>(null)
    return (
        <div className={s.list_container}>
            {tasks.map((elem) => {
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
