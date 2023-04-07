import { Outlet } from 'react-router-dom'

import { Footer, Navigation } from '@/components'
import { Container } from 'react-bootstrap'

import './MainLayout.css'

export function MainLayout() {
    return (
        <Container fluid className='layoutContainer'>
            <Navigation />
            <Outlet />
            <Footer />
        </Container>
    )
}
