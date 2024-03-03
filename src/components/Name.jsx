import { useSelector } from "react-redux"




const Name = () => {

    const auth =  useSelector (state => state.auth)
    console.log(auth)
    return (
        <h1> My name is : yazid</h1>
    )
}


export default Name ;