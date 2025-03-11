import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app font-montserrat">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
