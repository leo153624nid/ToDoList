/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks/hooks'
import {
    addTask,
    DEFAULT_TASK_ITEM,
    editTask,
    Task,
} from '../../store/slices/todoListSlice'
import { generateId } from '../../utils/GenerateId'
import Button from '../Button/Button'
import s from './Panel.module.css'

interface PanelProps {
    task: Task
    setTaskForEdit: React.Dispatch<React.SetStateAction<Task | null>>
}

function Panel({ task, setTaskForEdit }: PanelProps) {
    const dispatch = useAppDispatch()
    const [taskItem, setTaskItem] = useState(task)
    // Режим панели(добавление новой задачи или редактирование)
    const [editMode, setEditMode] = useState(task.id !== '')

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setTaskItem({ ...taskItem, [name]: value })
    }

    const add = (title: string, description: string) => {
        if (title) {
            dispatch(
                addTask({
                    id: generateId(),
                    title,
                    description,
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

    const edit = (title: string, description: string) => {
        if (title) {
            dispatch(
                editTask({
                    id: task.id,
                    title,
                    description,
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
                <Button
                    color="orange"
                    hidden={!editMode}
                    onClick={() => {
                        ad(taskItem.title, taskItem.description)
                    }}
                >
                    CANCEL
                </Button>
                <Button
                    color="red"
                    hidden={!editMode}
                    onClick={() => {
                        edt(taskItem.title, taskItem.description)
                    }}
                >
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

export default Panel
