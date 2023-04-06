import { Footer, Navigation } from '../../components'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}
