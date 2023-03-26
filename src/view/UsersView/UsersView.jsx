import { useFetch } from '../../hooks/useFetch'

import { Loading } from '../../components'
import User from './components/User/User'

import './UsersView.css'

const Users = () => {
    const { loading, data } = useFetch(`https://dummyjson.com/users`)

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
