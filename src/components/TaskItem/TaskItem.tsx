/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
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
        <div className={s.taskItem_container}>
            <div>
                <div className={s.taskItem_header}>
                    <div
                        className={s.taskItem_title}
                        style={{
                            opacity: task.done ? 0.5 : 1,
                            textDecoration: task.done ? 'line-through' : 'none',
                        }}
                    >
                        {task.title}
                    </div>

                    <div className={s.taskItem_date}>
                        created at {date.getDay()}.{date.getMonth()}.
                        {date.getFullYear()} {date.getHours()}:
                        {date.getMinutes()}
                    </div>
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
