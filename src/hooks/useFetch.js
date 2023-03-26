import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const getUsers = async (url) => {
        setLoading(true)
        const response = await axios.get(url)
        setData(response?.data.users)
        setLoading(false)
    }

    useEffect(() => {
        getUsers(url)
    }, [url])

    return { loading, data, setData }
}
