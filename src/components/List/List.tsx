/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import s from './List.module.css'

// interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
//     color: 'orange' | 'blue' | 'red'
// }

function List({ children, color, onClick, ...props }: ButtonProps) {
    return (
        <button
            className={className}
            type="button"
            onClick={onClick}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {children}
        </button>
    )
}

export default List
