import { NavLink, Outlet } from 'react-router-dom'

import './Navigation.css'

export const Navigation = (value) => {
    return (
        <>
            <nav className='link__Container'>
                <NavLink
                    className='links'
                    activeclassname={value.toString()}
                    to='/'
                >
                    Quotes
                </NavLink>
                <NavLink
                    className='links'
                    activeclassname={value.toString()}
                    to='/post'
                >
                    Posts
                </NavLink>
                <NavLink
                    className='links'
                    activeclassname={value.toString()}
                    to='/users'
                >
                    Users
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}
