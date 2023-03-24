import FilterUsers from './view/FIlterUsers/FilterUsers'
import SearchUsers from './view/SearchUsers/SearchUsers'

function App() {
    return (
        <div style={{ display: 'flex' }}>
            <SearchUsers />
            <FilterUsers />
        </div>
    )
}

export default App
