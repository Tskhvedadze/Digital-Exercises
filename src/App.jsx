import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components'

import 'bootstrap/dist/css/bootstrap.min.css'

import QuotesView from './view/QuotesView/QuotesView'
import PageNotFound from './view/PageNotFound/PageNotFound'
import PostView from './view/PostView/PostView'
import UserInfo from './view/UserInfo/UserInfo'
import Users from './view/UsersView/UsersView'

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
