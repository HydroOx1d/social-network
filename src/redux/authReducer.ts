import { accessToApiProp } from "../api/api";

const AUTH = "authReducer/AUTH";
const LOGOUT = "authReducer/LOGOUT";
const SUBMISSION_ERROR = "authReducer/SUBMISSION-ERROR";


type InitialStateType = {
  id: null | number;
  email: null | string;
  login: null | string;
  isAuth: boolean;

  loginSuccess: boolean;
  errorMessage: string;
};

const initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,

  loginSuccess: false,
  errorMessage: "",
};

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case AUTH: {
      return {
        ...state,
        ...action.authData,
        isAuth: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        ...action.authData,
      };
    }
    case SUBMISSION_ERROR: {
      return {
        ...state,
        loginSuccess: action.loginSuccess,
        errorMessage: action.errorMessage,
      };
    }
    default:
      return state;
  }
};

type SetAuthDataActionType = {
  type: typeof AUTH;
  authData: { id: number; email: string; login: string };
};

export const setAuthData = (id: number, email: string, login: string): SetAuthDataActionType => {
  return { type: AUTH, authData: {id, email, login} };
};

type LogoutActionType = {
  type: typeof LOGOUT
  authData: {id: null, email: null, login: null, isAuth: boolean}
} 

export const logout = (): LogoutActionType => {
  return {
    type: LOGOUT,
    authData: { id: null, email: null, login: null, isAuth: false },
  };
};

type ErrorMessActionType = {
  type: typeof SUBMISSION_ERROR
  loginSuccess: boolean
  errorMessage: string
}

const errorMess = (loginSuccess: boolean, errorMessage: string): ErrorMessActionType => {
  return {
    type: SUBMISSION_ERROR,
    loginSuccess,
    errorMessage,
  };
};

export const setIstAuthThunk = () => (dispatch) => {
  return accessToApiProp.setAuthData().then((data) => {
    if (data.resultCode === 0) {
      const {id, email, login} = data.data
      dispatch(setAuthData(id, email, login));
    }
  });
};

export const loginThunk = (loginData) => {
  return (dispatch) => {
    accessToApiProp.login(loginData).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setIstAuthThunk());
      } else {
        dispatch(errorMess(false, res.data.messages[0]));
      }
    });
  };
};

export const logoutThunk = () => {
  return (dispatch) => {
    accessToApiProp.logout().then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(logout());
      }
    });
  };
};

export default authReducer;
