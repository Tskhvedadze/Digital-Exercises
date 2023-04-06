import { Routes, Route } from 'react-router-dom'

import { MainLayout } from './layouts/MainLayout'

import { HomeView } from './views/HomeView'
import { ProductView } from './views/ProductView'
import { UsersView } from './views/UsersView'
import { FourOhFour } from './views/FourOhFour'

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<HomeView />} />
                <Route path='/users' element={<UsersView />} />
                <Route path='/products' element={<ProductView />} />
                <Route path='*' element={<FourOhFour />} />
            </Route>
        </Routes>
    )
}

export default App
