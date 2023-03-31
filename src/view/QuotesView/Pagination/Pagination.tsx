import { Pagination } from 'react-bootstrap'

export default function QuotePagination({
    quotesPerPage,
    totalQuotes,
    currentPage,
    setCurrentPage,
}: {
    quotesPerPage: number
    totalQuotes: number
    currentPage: number
    setCurrentPage: (page: number) => void
}): JSX.Element {
    let pageNumbers = []

    for (let page = 1; page <= Math.ceil(totalQuotes / quotesPerPage); page++) {
        pageNumbers.push(
            <Pagination.Item
                key={page}
                active={page === currentPage}
                onClick={() => setCurrentPage(page)}
            >
                {page}
            </Pagination.Item>,
        )
    }

    return (
        <Pagination
            size='lg'
            style={{ display: 'flex', justifyContent: 'center' }}
        >
            {pageNumbers}
        </Pagination>
    )
}
