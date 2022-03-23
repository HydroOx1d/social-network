import React from "react";
import Header from "./Header";
import "./Header.css";
import { connect } from "react-redux";
import { setAuthData, setIsAuth, setIstAuthThunk } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setIstAuthThunk()
  }

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

export default connect(mapStateToProps, { setAuthData, setIsAuth, setIstAuthThunk})(
  HeaderContainer
);
