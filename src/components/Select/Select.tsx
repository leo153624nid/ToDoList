/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { SortOption } from '../App/App'
import s from './Select.module.css'

interface SelectProps {
    options: SortOption[]
    defaultOption: string
}

function Select({ options, defaultOption }: SelectProps) {
    return (
        <select className={s.select_container}>
            <option disabled value="">
                {defaultOption}
            </option>
            {options.map((elem) => (
                <option key={elem.value} value={elem.value}>
                    {elem.name}
                </option>
            ))}
        </select>
    )
}

export default Select
