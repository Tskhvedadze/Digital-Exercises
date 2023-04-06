import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const Navigation = () => {
    return (
        <Navbar bg='primary' variant='dark' className='mb-3 px-5 '>
            <Nav>
                <Nav.Link to='/' as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to='users' as={NavLink}>
                    Users
                </Nav.Link>
                <Nav.Link to='products' as={NavLink}>
                    Products
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}
