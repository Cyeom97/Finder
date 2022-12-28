import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Nav from './components/Nav'
import './App.css'
function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
