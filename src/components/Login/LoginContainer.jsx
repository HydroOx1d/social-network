import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import {loginThunk} from '../../redux/authReducer'

class LoginContainer extends React.Component {

  render() {
    return <Login {...this.props} />;
  }
};

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps, { loginThunk })(LoginContainer);
