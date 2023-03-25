import { NavLink } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <>
            <div className='container'>
                <h2 className='title'>PageNotFound 404</h2>
                <NavLink className='link' to='/'>
                    Home Page
                </NavLink>
            </div>
        </>
    )
}

export default PageNotFound
