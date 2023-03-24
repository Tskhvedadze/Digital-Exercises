import { useState } from 'react'

import { Input, Loading } from '../../components'
import useFetch from '../../hooks/useFetch'
const FilterUsers = () => {
    const [firstName, setFirstName] = useState('')

    const { loading, error, data } = useFetch({
        url: `https://dummyjson.com/users/filter?key=firstName&value=${firstName}`,
    })

    return (
        <>
            <Input
                placeholder='FIlter By Name'
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
                            <li
                                style={{
                                    listStyle: 'none',
                                    fontSize: '20px',
                                    color: 'brown',
                                    border: '1px solid black',
                                    padding: '4px 7px 4px 7px ',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                }}
                            >
                                {user.firstName} {user.lastName} AGE: {user.age}
                            </li>
                        )
                    })}
                </ul>
            )}
        </>
    )
}

export default FilterUsers
