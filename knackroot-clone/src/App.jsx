import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app font-montserrat">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
