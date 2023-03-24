import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components'

import HomeView from './view/HomeView/HomeView'
import PageNotFound from './view/PageNotFound/PageNotFound'
import PostView from './view/PostView/PostView'

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route index element={<HomeView />} />
                <Route path='post' element={<PostView />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default App
