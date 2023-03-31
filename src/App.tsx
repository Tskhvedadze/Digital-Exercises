import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/index.js'

import 'bootstrap/dist/css/bootstrap.min.css'

import PageNotFound from './view/PageNotFound/PageNotFound.tsx'
import QuotesView from './view/QuotesView/QuotesView.tsx'
import PostView from './view/PostView/PostView.tsx'
import UserInfo from './view/UserInfo/UserInfo.jsx'
import Users from './view/UsersView/UsersView.jsx'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<QuotesView />} />
                <Route path='post' element={<PostView />} />
                <Route path='users' element={<Users />} />
            </Route>
            <Route path='users/:id' element={<UserInfo />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default App
