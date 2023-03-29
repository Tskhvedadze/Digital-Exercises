import { NavLink, Outlet } from 'react-router-dom'

import './Navigation.css'

export const Navigation = () => {
    return (
        <>
            <nav className='link__Container'>
                <NavLink className='links' activeclassname to='/'>
                    Quotes
                </NavLink>
                <NavLink className='links' activeclassname to='/post'>
                    Posts
                </NavLink>
                <NavLink className='links' activeclassname to='/users'>
                    Users
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}
