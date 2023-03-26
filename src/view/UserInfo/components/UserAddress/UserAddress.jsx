import React from 'react'

import './UserAddress.css'

export const UserAddress = ({ address, university, maidenName }) => {
    return (
        <div className='user__address'>
            <b>Address:</b>
            <p>
                Address: <b>{address.address}</b>
            </p>
            <p>
                City: <b>{address.city}</b>
            </p>
            <p>
                University: <b>{university}</b>
            </p>
            <p>
                State: <b>{address.state}</b>
            </p>
            <p>
                Coordinates: <b>lat: {address.coordinates.lat}</b>{' '}
                <b>lng: {address.coordinates.lng}</b>
            </p>
            <p>
                maidenName: <b>{maidenName}</b>
            </p>
            <p>
                postalCode: <b>{address.postalCode}</b>
            </p>
        </div>
    )
}
