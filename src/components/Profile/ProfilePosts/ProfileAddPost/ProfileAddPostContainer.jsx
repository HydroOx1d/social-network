import {
  addProfilePost,
} from "../../../../redux/profileReducer.ts";
import ProfileAddPost from "./ProfileAddPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProfilePosts(desc) {
      dispatch(addProfilePost(desc));
    },
  };
};

const ProfileAddPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileAddPost);

export default ProfileAddPostContainer;
