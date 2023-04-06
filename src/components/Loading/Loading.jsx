import { Spinner } from 'react-bootstrap'

export const Loading = ({ mode }) => {
    return (
        <div
            className='container d-flex justify-content-center align-items-center'
            style={mode ? { height: 'auto' } : { height: '100vh' }}
        >
            <Spinner animation='border' role='status' />
        </div>
    )
}
