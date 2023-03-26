import { NavLink } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <>
            <div className='not__found__container'>
                <h2 className='title'>Page Not Found 404</h2>
                <NavLink className='link' to='/'>
                    Home Page
                </NavLink>
            </div>
        </>
    )
}

export default PageNotFound
