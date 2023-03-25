import { useNavigate } from 'react-router-dom'

import './User.css'

const User = ({ image, firstName, lastName, age, id }) => {
    const navigate = useNavigate()

    return (
        <div className='container'>
            <img className='image' src={image} alt={`${firstName}`} />
            <div className='item'>
                <div className='container__content'>
                    <p className='paragraph'>{firstName}</p>
                    <p className='paragraph'>{lastName}</p>
                    <p className='paragraph'>AGE: {age}</p>
                </div>
                <button className='btn' onClick={() => navigate(`${id}`)}>
                    more information
                </button>
            </div>
        </div>
    )
}

export default User
