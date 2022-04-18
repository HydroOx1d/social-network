import { setIstAuthThunk } from "./authReducer";

let initialState = {
  initialized: false
}


export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case "INITIALIZE-APP": {
      return {
        ...state,
        initialized: true
      };
    }
    default: {
      return state
    }
  }
}


const initializeApp = () => ({
  type: 'INITIALIZE-APP'
})

export const initializeAppThunk = () => dispatch => {
  let promise = dispatch(setIstAuthThunk());
  promise.then(() => {
    dispatch(initializeApp());
  })
}