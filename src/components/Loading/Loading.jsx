import { Spinner } from 'react-bootstrap'

export const Loading = () => {
    return (
        <div
            className='container d-flex justify-content-center align-items-center'
            style={{ height: '100vh' }}
        >
            <Spinner animation='border' role='status' />
        </div>
    )
}
