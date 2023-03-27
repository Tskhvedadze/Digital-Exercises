import React from 'react'

import './Input.css'

export const Input = ({ ...props }) => {
    return (
        <>
            <input type='text' className='post__input' {...props} />
        </>
    )
}
