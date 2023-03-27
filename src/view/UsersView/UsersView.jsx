import { useState, useEffect } from 'react'
import axios from 'axios'
import { Loading } from '../../components'
import User from './components/User/User'

import './UsersView.css'

const Users = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const getUsers = async () => {
        setLoading(true)
        const response = await axios.get(
            'https://dummyjson.com/users?select=image,firstName,lastName,age&limit=100',
        )
        setData(response?.data.users)
        setLoading(false)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className='users_container'>
                    {data.map((user) => (
                        <User key={user.id} {...user} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Users
