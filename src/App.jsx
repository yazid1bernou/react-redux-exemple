import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar';
import { allFlags , singleFlag } from './redux/actions/FlagsAction'

function App() {
    
  const dispatch = useDispatch();
  const allDataflags =  useSelector(state => state.flags);
  const singleDataflag = useSelector(state => state.flag);

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

  //---------------Display flags and flag --------------------------------------------------
  const handleFlags = async() => {
     await dispatch(allFlags())
     console.log(allDataflags.flags)
  }
  const handleFlag = async() => {
     await dispatch(singleFlag())
     console.log(singleDataflag.flag)
  }
  return (
    <>
       <Navbar  />
       <button onClick={handleLogin}> Login</button>     
       <button onClick={handleLogout}>Logout</button> 

       <hr />
       <h2> Display Flags and flag </h2>
       <button onClick={handleFlags}> Flags</button>
       <button onClick={handleFlag}>Flag</button>
       <h2> Dispaly all flags</h2>
       <hr></hr>
          <div>
             {allDataflags.flags.map( ({title , thumbnailUrl}) => (
                  <>
                     <p> {title}</p>
                     <img src={thumbnailUrl} width="20px"/>
               
                  </>
                ))
              } 
        
         </div>
         <h2> Display single flag</h2>
         <hr></hr>
         <div> 
           {/*  {singleDataflag.flag.map(({title , thumbnailUrl}) => (
               <>
                <p> {title}</p>
                     <img src={thumbnailUrl} width="100px"/>
               </>
            ))
           } */}
         </div>
    </>
  )
}

export default App
