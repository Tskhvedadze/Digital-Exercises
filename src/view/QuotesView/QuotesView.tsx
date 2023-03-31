/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import Pagination from './Pagination/Pagination.tsx'
import Quote from './Quote/Quote.tsx'

import { getQuotes } from '../../utils/data.utils.ts'

type DataProps = {
    id: number
    author: string
    quote: string
}

const QuotesView = () => {
    const [data, setData] = useState<DataProps[]>([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const quotesPerPage = 10
    const totalQuotes = 100

    const fetchdata = async () => {
        try {
            setLoading(true)
            const skip = (currentPage - 1) * quotesPerPage

            const data = await getQuotes<DataProps[]>(
                `https://dummyjson.com/quotes?limit=${quotesPerPage}&skip=${skip}`,
            )

            if (data) {
                setData(data)
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
                <Quote quotes={[]} {...data} loading={loading} />
            </div>
            <Pagination
                quotesPerPage={quotesPerPage}
                totalQuotes={totalQuotes}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    )
}

export default QuotesView
