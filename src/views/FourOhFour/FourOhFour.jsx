import { useNavigate } from 'react-router-dom'

function FourOhFour() {
    const navigate = useNavigate()

    return (
        <>
            <h1 className='h3 pb-2 mb-4 text-danger border-bottom border-danger text-center'>
                Page Not Found 404
            </h1>
            <div className='text-center '>
                <button
                    type='button'
                    className='btn btn-outline-danger'
                    onClick={() => navigate('/')}
                >
                    Home Page
                </button>
            </div>
        </>
    )
}

export default FourOhFour
