import { setIstAuthThunk } from "./authReducer.ts";

const INITIALIZE_APP: string = 'appReducer/INITIALIZE-APP'

type InitialStateType = {
  initialized: boolean
}

const initialState: InitialStateType = {
  initialized: false
}


export const appReducer = (state = initialState, action: any): InitialStateType => {
  switch(action.type) {
    case INITIALIZE_APP: {
      return {
        ...state,
        initialized: true,
      };
    }
    default: {
      return state
    }
  }
}

type InitializeAppActionType = {
  type: typeof INITIALIZE_APP
}

const initializeApp = (): InitializeAppActionType => ({
  type: INITIALIZE_APP,
})

export const initializeAppThunk = () => (dispatch: any) => {
  let promise = dispatch(setIstAuthThunk());
  promise.then(() => {
    dispatch(initializeApp());
  })
}