/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks/hooks'
import { addTask, Task } from '../../store/slices/todoListSlice'
import { generateId } from '../../utils/GenerateId'
import Button from '../Button/Button'
import s from './Panel.module.css'

const DEFAULT_TASK_ITEM: Task = {
    id: '',
    title: '',
    description: '',
    createdAt: 0,
    done: false,
}

function Panel() {
    const dispatch = useAppDispatch()
    const [taskItem, setTaskItem] = useState(DEFAULT_TASK_ITEM)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setTaskItem({ ...taskItem, [name]: value })
    }

    const handleClick = (title: string, description: string) => {
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
                    color="blue"
                    onClick={() => {
                        handleClick(taskItem.title, taskItem.description)
                    }}
                >
                    ADD
                </Button>
            </div>
        </div>
    )
}

export default Panel
