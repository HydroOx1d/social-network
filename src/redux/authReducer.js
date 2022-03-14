const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  resultCode: null
}

const authReducer = (state = initialState, action) => {

  switch(action.type) {
    case "AUTH": {
      return {
        ...state,
        ...action.authData,
      }
    } 
    case "SET-IS-AUTH": {
      return {
        ...state,
        isAuth: action.code === 0 ? true : false
      }
    }
    default: return state 
  }
}

export const setAuthData = (authData) => {

  return {type: 'AUTH', authData}
}
export const setIsAuth = (code) => {
  return {
    type: 'SET-IS-AUTH',
    code
  }
}

export default authReducer