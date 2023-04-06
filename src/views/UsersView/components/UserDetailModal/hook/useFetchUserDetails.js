import axios from 'axios'
import { useState } from 'react'

export function useFetchUserDetails({ url }) {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)

    const getSingleUser = async () => {
        setLoading(true)
        const response = await axios.get(url)
        setUser(response?.data)
        setLoading(false)
    }

    return { user, loading, getSingleUser }
}
