/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { useAppDispatch } from '../../store/hooks/hooks'
import {
    checkTask,
    deleteTask,
    Task,
    updateTask,
} from '../../store/slices/todoListSlice'
import Button from '../Button/Button'
import s from './TaskItem.module.css'

interface TaskItemProps {
    task: Task
}

function TaskItem({ task }: TaskItemProps) {
    const dispatch = useAppDispatch()

    const check = () => {
        dispatch(
            checkTask({
                ...task,
                done: !task.done,
            })
        )
    }

    const edit = () => {
        dispatch(
            updateTask({
                ...task,
                done: !task.done,
            })
        )
    }

    const del = () => {
        dispatch(
            deleteTask({
                ...task,
            })
        )
    }
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
                <Button color="green" onClick={check}>
                    CHECK
                </Button>
                <Button color="orange" onClick={edit}>
                    EDIT
                </Button>
                <Button color="red" onClick={del}>
                    DELETE
                </Button>
            </div>
        </div>
    )
}

export default TaskItem
