import { Link } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <>
            <div className='container'>PageNotFound 404</div>
            <Link to='/'>Go to the Home Page</Link>
        </>
    )
}

export default PageNotFound
