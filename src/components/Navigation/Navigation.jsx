import { Link } from 'react-router-dom'

import './Navigation.css'

export const Navigation = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='post'> Posts</Link>
        </nav>
    )
}
