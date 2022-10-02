/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks/hooks'
import {
    addTask,
    DEFAULT_TASK_ITEM,
    deleteTask,
    editTask,
    Task,
} from '../../store/slices/todoListSlice'
import { generateId } from '../../utils/GenerateId'
import Button from '../Button/Button'
import s from './Panel.module.css'

interface PanelProps {
    task: Task
    setTaskForEdit?: React.Dispatch<React.SetStateAction<Task | null>>
}

function Panel({ task, setTaskForEdit }: PanelProps) {
    const dispatch = useAppDispatch()
    const [taskItem, setTaskItem] = useState(task)
    // Режим панели(добавление новой задачи или редактирование)
    const editMode = task.id !== ''

    // Изменение состояния инпутов через хук, не через store
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setTaskItem({ ...taskItem, [name]: value })
    }

    // Добавление новой задачи
    const add = (title: string, description: string) => {
        if (title) {
            dispatch(
                addTask({
                    id: generateId(),
                    title,
                    description:
                        description === '' ? 'no description' : description,
                    createdAt: Date.now(),
                    done: false,
                })
            )
            setTaskItem(DEFAULT_TASK_ITEM)
        } else {
            alert('Введите название задачи!')
            console.log('Введите название задачи!')
        }
    }

    // Редактирование существующей задачи
    const edit = (title: string, description: string) => {
        if (title && setTaskForEdit) {
            dispatch(
                editTask({
                    id: task.id,
                    title,
                    description:
                        description === '' ? 'no description' : description,
                    createdAt: task.createdAt,
                    done: task.done,
                })
            )
            setTaskForEdit(null)
        } else {
            alert('Введите название задачи!')
            console.log('Введите название задачи!')
        }
    }

    // Отмена редактирование существующей задачи, возврат к исходным данным задачи
    const cancel = () => {
        if (setTaskForEdit) setTaskForEdit(null)
    }

    // Удаление редактируемой задачи
    const del = () => {
        dispatch(
            deleteTask({
                ...task,
            })
        )
    }

    return (
        <div className={s.panel_container}>
            <div className={s.fields_container}>
                <div className={s.field_container}>
                    <label htmlFor="title">
                        <div>title</div>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={taskItem.title}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className={s.field_container}>
                    <label htmlFor="description">
                        <div>description</div>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={taskItem.description}
                            onChange={onChange}
                        />
                    </label>
                </div>
            </div>
            <div className={s.button_container}>
                <Button
                    color="green"
                    hidden={!editMode}
                    onClick={() => {
                        edit(taskItem.title, taskItem.description)
                    }}
                >
                    OK
                </Button>
                <Button color="orange" hidden={!editMode} onClick={cancel}>
                    CANCEL
                </Button>
                <Button color="red" hidden={!editMode} onClick={del}>
                    DELETE
                </Button>
                <Button
                    color="blue"
                    hidden={editMode}
                    onClick={() => {
                        add(taskItem.title, taskItem.description)
                    }}
                >
                    ADD
                </Button>
            </div>
        </div>
    )
}

Panel.defaultProps = {
    setTaskForEdit: undefined,
}

export default Panel
