/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks/hooks'
import { checkTask, deleteTask, Task } from '../../store/slices/todoListSlice'
import Button from '../Button/Button'
import s from './TaskItem.module.css'

interface TaskItemProps {
    task: Task
    setTaskForEdit: React.Dispatch<React.SetStateAction<Task | null>>
}

function TaskItem({ task, setTaskForEdit }: TaskItemProps) {
    const dispatch = useAppDispatch()
    const date = new Date(task.createdAt)
    const overdue = !(Date.now() - task.createdAt < task.time * 3600 * 1000)
    const [showMe, setShowMe] = useState(false)

    // Изменение статуса выполнения задачи
    const check = () => {
        dispatch(
            checkTask({
                ...task,
                done: !task.done,
            })
        )
    }

    // Переход на отображения панели редактирования задачи вместо карточки задачи
    const edit = () => {
        setTaskForEdit(task)
    }

    // Удаление задачи
    const del = () => {
        dispatch(
            deleteTask({
                ...task,
            })
        )
    }
    return (
        <div
            className={s.taskItem_container}
            style={{
                backgroundColor: overdue ? 'rgb(165,42,42)' : 'rgb(165,157,42)',
            }}
        >
            <div>
                <div className={s.taskItem_header}>
                    <div
                        className={s.taskItem_title}
                        onClick={() => setShowMe(!showMe)}
                        style={{
                            opacity: task.done ? 0.4 : 1,
                            textDecoration: task.done
                                ? 'line-through'
                                : 'underline',
                        }}
                    >
                        {`${task.title} ${
                            overdue === true ? '- overdue!' : ''
                        }`}
                    </div>

                    <div className={s.taskItem_date}>
                        created at {date.getDay()}.{date.getMonth()}.
                        {date.getFullYear()} {date.getHours()}:
                        {date.getMinutes()}
                    </div>
                </div>

                <div
                    aria-hidden
                    className={s.taskItem_description}
                    hidden={!showMe}
                >
                    <p>{task.description}</p>
                    <p>left {task.time} hour(s)</p>
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
