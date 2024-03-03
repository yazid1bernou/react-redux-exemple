import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar'

function App() {
    
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({
      type : "LOGIN"
    })
  };
  const handleLogout = () => {
    dispatch ({
      type : "LOGOUT"
    })
  };
  return (
    <>
       <Navbar  />
       <button onClick={handleLogin}> Login</button>     
       <button onClick={handleLogout}>Logout</button> 
    </>
  )
}

export default App
