import axios from 'axios'
import { useState, useEffect } from 'react'

export function useFetchUsers() {
    const [users, setUsers] = useState([])
    const [loadingUsers, setLoadingUsers] = useState(false)

    const getUsers = async () => {
        setLoadingUsers(true)
        const response = await axios.get('https://dummyjson.com/users')
        setUsers(response?.data?.users)
        setLoadingUsers(false)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return { users, loadingUsers }
}
