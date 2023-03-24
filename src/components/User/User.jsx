import React from 'react'

import './User.css'

export const User = (user) => {
    return (
        <li className='listContainer'>
            <label>FullName : </label>
            <span>
                {user.firstName} {user.lastName}
            </span>
        </li>
    )
}
