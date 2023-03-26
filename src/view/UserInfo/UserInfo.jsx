import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import './UserInfo.css'
import { Loading } from '../../components'
import { UserAddress, UserAbout, UserCompany } from './components'

export default function UserInfo() {
    const [user, setUser] = useState([])
    const { id } = useParams()

    const getSingleUser = async () => {
        const resp = await axios(`https://dummyjson.com/users/${id}`)

        setUser([resp?.data])
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
                        {user.map((item) => (
                            <UserAbout {...item} key={item.id} />
                        ))}
                        {user.map((item) => (
                            <UserAddress {...item} key={item.id} />
                        ))}
                        {user.map((item) => (
                            <UserCompany {...item} key={item.id} />
                        ))}
                        <div className='user__image'>
                            {user.map((item) => (
                                <img
                                    key={item.id}
                                    src={item.image}
                                    alt={`${user?.firstName}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}
