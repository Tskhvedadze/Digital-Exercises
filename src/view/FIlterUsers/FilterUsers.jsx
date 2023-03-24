import { useState } from 'react'

import { Input, Loading } from '../../components'
import useFetch from '../../hooks/useFetch'
const FilterUsers = () => {
    const [firstName, setFirstName] = useState('Mavis')

    const { loading, error, data } = useFetch({
        url: `https://dummyjson.com/users/filter?key=firstName&value=${firstName}`,
    })

    console.log(data?.data.users)
    return (
        <>
            <Input
                placeholder='Search'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            {error && <div>{error}</div>}
            {loading ? (
                <Loading />
            ) : (
                <ul>
                    {data?.data.users.map((user) => {
                        return (
                            <li>
                                {user.firstName} {user.lastName}
                            </li>
                        )
                    })}
                </ul>
            )}
        </>
    )
}

export default FilterUsers
