import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetch({ url }) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState(null)

    async function getUsers(url) {
        try {
            setError('')
            setLoading(true)
            const resp = await axios.get(url)
            setData(resp)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsers(url)
    }, [url])

    return { loading, error, data }
}
