import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components'

import HomeView from './view/HomeView/HomeView'
import PageNotFound from './view/PageNotFound/PageNotFound'
import PostView from './view/PostView/PostView'
import Users from './view/UsersView/UsersView'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<HomeView />} />
                <Route path='post' element={<PostView />} />
                <Route path='users' element={<Users />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default App
