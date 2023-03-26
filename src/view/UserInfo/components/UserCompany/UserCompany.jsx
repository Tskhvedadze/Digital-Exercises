import React from 'react'

import './UserCompany.css'

export const UserCompany = ({ company }) => {
    return (
        <div className='user__company'>
            <b>Company:</b>
            <p>
                Name: <b>{company.name}</b>
            </p>
            <p>
                Title: <b>{company.title}</b>
            </p>
            <p>
                Department: <b>{company.department}</b>
            </p>
            <p>
                Address: <b>{company.address.address}</b>
            </p>
            <p>
                City: <b>{company.address.city}</b>
            </p>
            <p>
                State: <b>{company.address.state}</b>
            </p>
            <p>
                PostalCode: <b>{company.address.postalCode}</b>
            </p>
        </div>
    )
}
