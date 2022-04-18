import React from "react";
import Header from "./Header";
import "./Header.css";
import { connect } from "react-redux";
import {
  setAuthData,
  logoutThunk,
} from "../../redux/authReducer";

class HeaderContainer extends React.Component {


  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  setAuthData,
  logoutThunk,
})(HeaderContainer);
