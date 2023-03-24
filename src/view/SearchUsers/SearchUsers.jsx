import { useState } from 'react'
import useFetch from '../../hooks/useFetch'

import { User, Input, Loading } from '../../components'

const SearchUsers = () => {
    const [searchKeyword, setSearchKeyword] = useState('')
    const { loading, error, data } = useFetch({
        url: `https://dummyjson.com/users/search?q=${searchKeyword}`,
    })

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
                    {data?.data.users.map((user) => {
                        return <User key={user.id} {...user} />
                    })}
                </ul>
            )}
        </>
    )
}

export default SearchUsers
