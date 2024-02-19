
const initialState =  {
    Login : false 
}
const AuthReducer =  (state =  initialState , action) => {
      switch(action.type) {
         case 'LOGIN' :
            return  {
                ...state ,
                Login : true 
            }
         case 'LOGOUT' :
            return  {
                ...state ,
                Login :  false
            } ;
         default :
            return state ;
      }
}