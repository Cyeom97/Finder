import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import { Search } from './Search/Search'

import './App.css'
function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
