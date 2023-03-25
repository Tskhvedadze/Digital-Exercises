import { NavLink, Outlet } from 'react-router-dom'

import './Navigation.css'

export const Navigation = () => {
    return (
        <>
            <nav className='link__Container'>
                <NavLink className='links' to='/'>
                    Home
                </NavLink>
                <NavLink className='links' to='post'>
                    Posts
                </NavLink>
                <NavLink className='links' to='users'>
                    Users
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}
