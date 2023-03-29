import { Alert } from 'react-bootstrap'

import { Loading } from '../../../components'

const Quote = ({ quotes, loading }) => {
    if (loading) {
        return <Loading />
    }

    return (
        <ul className='list-group mb-4'>
            {quotes?.map((quote) => {
                return (
                    <li className='list-group-item' key={quote.id}>
                        <Alert variant='success'>
                            <Alert.Heading>
                                <span style={{ color: 'red' }}>AUTHOR : </span>
                                {quote.author}
                            </Alert.Heading>
                            <hr />
                            <p className='mb-0 '>
                                <b>QUOTE :</b> {quote.quote}
                            </p>
                        </Alert>
                    </li>
                )
            })}
        </ul>
    )
}

export default Quote
