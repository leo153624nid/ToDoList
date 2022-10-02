/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { useAppDispatch } from '../../store/hooks/hooks'

import s from './Search.module.css'

interface SearchProps {
    value: string
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

function Search({ value, setSearchQuery }: SearchProps) {
    const dispatch = useAppDispatch()

    // Изменение состояния инпутов через хук, не через store
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }

    return (
        <div className={s.search_container}>
            <div className={s.fields_container}>
                <div className={s.field_container}>
                    <label htmlFor="search">
                        <div>search</div>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            value={value}
                            onChange={onChange}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Search
