import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
    
  const auth =  useSelector( state => state.auth)
  console.log(auth);
  return (
    <>
       <button> Login</button>     
       <button>Logout</button> 
    </>
  )
}

export default App
