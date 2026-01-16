import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './Components/NavBar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <NavBar />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<Product />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
