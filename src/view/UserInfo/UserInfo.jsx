import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import './UserInfo.css'
import { Loading } from '../../components'

export default function UserInfo() {
    const [user, setUser] = useState(null)
    const { id } = useParams()

    const getSingleUser = async () => {
        const resp = await axios(`https://dummyjson.com/users/${id}`)

        setUser(resp?.data)
    }

    useEffect(() => {
        getSingleUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <header className='user__info__header'>User Information</header>
            {user ? (
                <div className='user__info__page'>
                    <div className='user__info__content'>
                        <div className='user__about'>
                            <p>
                                FIRSTNAME: <span>{user?.firstName}</span>
                            </p>
                            <p>
                                LASTNAME: <span>{user?.lastName}</span>
                            </p>
                            <p>
                                AGE: <span>{user?.age}</span>
                            </p>
                        </div>
                        <div className='user__address'>
                            <p>
                                STATE: <span>{user?.address.state}</span>
                            </p>
                            <p>
                                CITY: <span>{user?.address.city}</span>
                            </p>
                            <p>
                                postalCode:{' '}
                                <span>{user?.address.postalCode}</span>
                            </p>
                        </div>
                        <div className='user__image'>
                            <img src={user?.image} alt={`${user?.firstName}`} />
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}
