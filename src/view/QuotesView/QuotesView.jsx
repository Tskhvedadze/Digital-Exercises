/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import axios from 'axios'

import Pagination from './Pagination/Pagination'
import Quote from './Quote/Quote'

const QuotesView = () => {
    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const quotesPerPage = 10

    const fetchdata = async () => {
        try {
            setLoading(true)
            const skip = (currentPage - 1) * quotesPerPage
            const res = await axios.get(
                `https://dummyjson.com/quotes?limit=${quotesPerPage}&skip=${skip}`,
            )
            if (res.data) {
                setQuotes(res.data)
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchdata()
    }, [currentPage])

    return (
        <>
            <div
                className='container mb-5 '
                style={{ height: '74vh', width: '70%', overflowY: 'scroll' }}
            >
                <Quote {...quotes} loading={loading} />
            </div>
            <Pagination
                quotesPerPage={quotesPerPage}
                totalQuotes={quotes.total}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    )
}

export default QuotesView
