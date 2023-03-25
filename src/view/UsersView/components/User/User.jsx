import './User.css'

const User = ({ image, firstName, lastName, age }) => {
    return (
        <div className='container'>
            <img className='image' src={image} alt={`${firstName}`} />
            <div>
                <div className='container__content'>
                    <p className='paragraph'>{firstName}</p>
                    <p className='paragraph'>{lastName}</p>
                    <p className='paragraph'>{age}</p>
                </div>
                <button className='btn'>more information</button>
            </div>
        </div>
    )
}

export default User
