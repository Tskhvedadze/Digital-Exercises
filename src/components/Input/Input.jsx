import React from 'react'

import './Input.css'

export const Input = ({ ...props }) => {
    return (
        <div className='input__container'>
            <input {...props} />
        </div>
    )
}
