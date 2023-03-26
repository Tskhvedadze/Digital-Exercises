import React from 'react'

import './UserAbout.css'

export const UserAbout = ({
    firstName,
    lastName,
    email,
    phone,
    age,
    birthDate,
    gender,
    weight,
}) => {
    return (
        <div className='user__about'>
            <b>About:</b>
            <p>
                FistName: <b>{firstName}</b>
            </p>

            <p>
                LastName: <b>{lastName}</b>
            </p>
            <p>
                Email: <b>{email}</b>
            </p>
            <p>
                Phone: <b>{phone}</b>
            </p>
            <p>
                Age: <b>{age}</b>
            </p>
            <p>
                BirthDate: <b>{birthDate}</b>
            </p>
            <p>
                Gender: <b>{gender}</b>
            </p>
            <p>
                Weight: <b>{weight}kg</b>
            </p>
        </div>
    )
}
