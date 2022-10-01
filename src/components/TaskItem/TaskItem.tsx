/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { useAppDispatch } from '../../store/hooks/hooks'
import { checkTask, Task } from '../../store/slices/todoListSlice'
import Button from '../Button/Button'
import s from './TaskItem.module.css'

interface TaskItemProps {
    task: Task
}

function TaskItem({ task }: TaskItemProps) {
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(
            checkTask({
                ...task,
                done: !task.done,
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
                <Button
                    color="green"
                    onClick={() => {
                        handleClick()
                    }}
                >
                    CHECK
                </Button>
                <Button color="orange">EDIT</Button>
                <Button color="red">DELETE</Button>
            </div>
        </div>
    )
}

export default TaskItem
