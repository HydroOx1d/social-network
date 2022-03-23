import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const requireAuthHOC = (Component) => {
  const requireAuth = (props) => {
    if (props.isAuth) return <Component {...props} />;
    else return <Navigate to="/login" />;
  };

  return connect(mapStateToProps)(requireAuth);
};
