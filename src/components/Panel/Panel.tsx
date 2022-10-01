/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import { Task } from '../../store/slices/todoListSlice'
import { generateId } from '../../utils/GenerateId'

const DEFAULT_TASK_ITEM: Task = {
    id: '',
    title: '',
    description: '',
    createdAt: 0,
    done: false,
}

function Panel() {
    const [taskItem, setTaskItem] = useState(DEFAULT_TASK_ITEM)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setTaskItem({ ...taskItem, [name]: value })
    }

    return (
        <div>
            <div>
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
            <div>
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
            <div>
                <button type="button">ADD</button>
            </div>
        </div>
    )
}

export default Panel
