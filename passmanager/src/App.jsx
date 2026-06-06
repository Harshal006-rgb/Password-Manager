import { useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Manager from './components/Manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Manager/>
    <Footer/>
    </>
  )
}

export default App
