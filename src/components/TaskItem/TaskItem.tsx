/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { Task } from '../../store/slices/todoListSlice'
import s from './TaskItem.module.css'

interface TaskItemProps {
    task: Task
}

function TaskItem({ task }: TaskItemProps) {
    return (
        <div className={s.taskItem_container}>
            <div>{task.title}</div>
        </div>
    )
}

export default TaskItem
