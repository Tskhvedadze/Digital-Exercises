import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import TodoComponent from './TodoComponent'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <TodoComponent />
    </React.StrictMode>,
)
