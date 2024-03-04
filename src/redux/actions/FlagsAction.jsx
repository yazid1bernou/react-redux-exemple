import axios from "axios"

export const  allFlags = () => dispatch=> {
    axios.get('https://jsonplaceholder.typicode.com/photos')
          .then(result => {
            dispatch({
                type : "FETCH_ALL_FLAGS",
                payload : result.data
            })
          })
}

export const singleFlag =  () => dispatch => {
     axios.get('https://jsonplaceholder.typicode.com/photos/1')
     .then(result =>{
         dispatch({
            type : "FETCH_SINGLE_FLAG",
            payload : result.data
         })
     })

}