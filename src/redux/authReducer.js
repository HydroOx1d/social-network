import { accessToApiProp } from "../api/api";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,

  loginSuccess: false,
  errorMessage: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH": {
      return {
        ...state,
        ...action.authData,
        isAuth: true,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        ...action.authData,
      };
    }
    case "SUBMISSION-ERROR": {
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

export const setAuthData = (authData) => {
  return { type: "AUTH", authData };
};
export const logout = (
  authData = { id: null, email: null, login: null, isAuth: false }
) => {
  return {
    type: "LOGOUT",
    authData,
  };
};
const errorMess = (loginSuccess, errorMessage) => {
  return {
    type: "SUBMISSION-ERROR",
    loginSuccess,
    errorMessage,
  };
};

export const setIstAuthThunk = () => (dispatch) => {
  return accessToApiProp.setAuthData().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthData(data.data));
    }
  });
};

export const loginThunk = (loginData) => {
  return (dispatch) => {
    accessToApiProp.login(loginData).then((res) => {
      if (res.data.resultCode === 0) {
        accessToApiProp.setAuthData().then((data) => {
          if (data.resultCode === 0) {
            dispatch(setAuthData(data.data));
            dispatch(errorMess(true, res.data.messages[0]));
          }
        });
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
