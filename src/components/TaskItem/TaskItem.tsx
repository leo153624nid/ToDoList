/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { Task } from '../../store/slices/todoListSlice'
import Button from '../Button/Button'
import s from './TaskItem.module.css'

interface TaskItemProps {
    task: Task
}

function TaskItem({ task }: TaskItemProps) {
    return (
        <div className={s.taskItem_container}>
            <div>
                <div
                    aria-hidden
                    className={s.taskItem_title}
                    style={{
                        opacity: task.done ? 0.5 : 1,
                        textDecoration: task.done ? 'line-through' : 'none',
                    }}
                >
                    {task.title}
                </div>
                <div aria-hidden className={s.taskItem_description}>
                    {task.description}
                </div>
            </div>
            <div className={s.taskItem_button_container}>
                <Button color="green">DONE</Button>
                <Button color="orange">EDIT</Button>
                <Button color="red">DELETE</Button>
            </div>
        </div>
    )
}

export default TaskItem
