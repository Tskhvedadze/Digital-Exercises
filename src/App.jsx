import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { MainLayout } from '@/layouts/MainLayout'
import { Loading } from '@/components'

const HomeView = lazy(() => import('@/views/HomeView/HomeView'))
const ProductView = lazy(() => import('@/views/ProductView/ProductView'))
const UsersView = lazy(() => import('@/views/UsersView/UsersView'))
const FourOhFour = lazy(() => import('@/views/FourOhFour/FourOhFour'))

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<HomeView />} />
                    <Route path='users' element={<UsersView />} />
                    <Route path='products' element={<ProductView />} />
                </Route>
                <Route path='*' element={<FourOhFour />} />
            </Routes>
        </Suspense>
    )
}

export default App
