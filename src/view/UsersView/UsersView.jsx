import { useState, useEffect } from 'react'

import axios from 'axios'
import User from './components/User/User'

import './UsersView.css'

const Users = () => {
    const [data, setData] = useState([])

    const getUsers = async () => {
        const response = await axios.get(`https://dummyjson.com/users`)
        setData(response?.data.users)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className='users_container'>
            {data && data.map((user) => <User key={user.id} {...user} />)}
        </div>
    )
}

export default Users
