import { useSelector } from "react-redux"




const Name = () => {

    const auth =  useSelector (state => state.auth)
    console.log(auth.Login)
    return (
        <>
          <h1> My name is : </h1> <span style={{display : !auth.Login ? "none" : ""}}> bernou yazid </span>
          
        </>
      
    )
}


export default Name ;