import {
  addProfilePost,
  changeValueAction,
} from "../../../../redux/profileReducer";
import ProfileAddPost from "./ProfileAddPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profileAddPostValues: state.profile.profileAddPostValues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeValue(e) {
      dispatch(changeValueAction(e));
    },
    addProfilePosts() {
      dispatch(addProfilePost());
    },
  };
};

const ProfileAddPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileAddPost);

export default ProfileAddPostContainer;
