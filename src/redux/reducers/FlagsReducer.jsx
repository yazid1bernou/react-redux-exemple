const initialState =  {
    flags : [] , 
    flag :  {}
}

const FlagsReducer = ( state = initialState , action) => {
   switch (action.type) {
    case "FETCH_ALL_FLAGS" : 
        return {
            ...state , 
            flags : action.payload
            
        }
    case "FETCH_SINGLE_FLAG" :
        return {
            ...state , 
            flag : action.payload
        }
    default : 
        return state 
   }
}

export default FlagsReducer ;
