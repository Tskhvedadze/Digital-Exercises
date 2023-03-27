import React from 'react'

import './SinglePost.css'

export const SinglePost = ({ title, body }) => {
    return (
        <div className='content__container'>
            <h2 className='content__title'>{title}</h2>
            <p className='content__para'>{body}</p>
        </div>
    )
}
