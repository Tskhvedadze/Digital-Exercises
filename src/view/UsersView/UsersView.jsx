import { useState, useEffect } from 'react'

import axios from 'axios'
import User from './components/User/User'

import { Loading } from '../../components'

import './UsersView.css'

const Users = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const getUsers = async () => {
        setLoading(true)
        const response = await axios.get(`https://dummyjson.com/users`)
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
                    {data?.map((user) => (
                        <User key={user.id} {...user} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Users
