import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setProfileDataThunk,
  setStatusThunk,
  updateStatusThunk,
} from "../../redux/profileReducer";
import {requireAuthHOC} from '../../hoc/requireAuth'
import {withRouter} from '../../hoc/withRouters'
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this?.props?.match?.params?.userId
    if(!userId) userId = 22715
    this.props.setProfileDataThunk(userId)
    this.props.setStatusThunk(userId)
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profileData: state.profile.profileData,
    status: state.profile.status
  };
};

export default compose(
  connect(mapStateToProps, {
    setProfileDataThunk,
    setStatusThunk,
    updateStatusThunk,
  }),
  withRouter
)(ProfileContainer);
