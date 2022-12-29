import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'

import './App.css'
function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
