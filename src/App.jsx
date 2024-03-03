import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'

function App() {
    
  
  return (
    <>
       <Navbar />
       <button> Login</button>     
       <button>Logout</button> 
    </>
  )
}

export default App
