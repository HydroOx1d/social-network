import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import {loginThunk} from '../../redux/authReducer.ts'
import { Navigate } from "react-router-dom";

class LoginContainer extends React.Component {

  render() {
    if(this.props.isAuth) return <Navigate to={'/profile'}/>
    return <Login {...this.props} />;
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    loginSuccess: state.auth.loginSuccess,
    errorMessage: state.auth.errorMessage,
  };
}


export default connect(mapStateToProps, { loginThunk })(LoginContainer);
