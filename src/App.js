import { useEffect, useState } from 'react'

import { User, Loading, Input } from './components'

import axios from 'axios'

function App() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [searchKeyword, setSearchKeyword] = useState('')

    async function getUsers(searchKeyword) {
        try {
            setError('')
            setLoading(true)
            const resp = await axios.get(
                `https://dummyjson.com/users/search?q=${searchKeyword}`,
            )
            setUsers(resp.data?.users)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsers(searchKeyword)
    }, [searchKeyword])

    return (
        <>
            <Input
                placeholder='Search'
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
            />
            {error && <div>{error}</div>}
            {loading ? (
                <Loading />
            ) : (
                <ul>
                    {users.map((user) => {
                        return <User user={user} key={user.id} />
                    })}
                </ul>
            )}
        </>
    )
}

export default App
