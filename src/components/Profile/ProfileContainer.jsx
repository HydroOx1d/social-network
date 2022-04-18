import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setProfileDataThunk,
  setStatusThunk,
  updateStatusThunk,
  uploadProfileAvatar,
  updateProfileInfo,
} from "../../redux/profileReducer";
import { withRouter } from "../../hoc/withRouters";
import { compose } from "redux";
import { useNavigate } from "react-router-dom";

const ProfileContainer = (props) => {
  let history = useNavigate();
  let userId = props?.match?.params?.userId;
  useEffect(() => {
    if (!userId) {
      userId = props.loginUserId;
      if (!userId) {
        history("/login");
      }
    }
    props.setProfileDataThunk(userId);
    props.setStatusThunk(userId);
  }, [props.loginUserId, userId]);

  return <Profile {...props} isOwner={!userId}/>;
};

const mapStateToProps = (state) => {
  return {
    profileData: state.profile.profileData,
    status: state.profile.status,

    isAuth: state.auth.isAuth,
    loginUserId: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps, {
    setProfileDataThunk,
    setStatusThunk,
    updateStatusThunk,
    uploadProfileAvatar,
    updateProfileInfo,
  }),
  withRouter
)(ProfileContainer);
