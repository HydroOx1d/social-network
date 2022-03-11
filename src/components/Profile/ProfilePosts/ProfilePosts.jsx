import "./ProfilePosts.css";
import ProfilePost from "./ProfilePost/ProfilePost";
import ProfileAddPostContainer from "./ProfileAddPost/ProfileAddPostContainer";
import { connect } from "react-redux";

const ProfilePosts = (props) => {
  return (
    <div className="profile__posts">
      <div className="prof__addpost">
        <ProfileAddPostContainer />
      </div>
      <div className="prof__posts">
        {props.profilePostData.map((post) => (
          <ProfilePost text={post.text} key={post.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profilePostData: state.profile.profilePostData,
  };
};

const ProfilePostsContainer = connect(mapStateToProps, null)(ProfilePosts);

export default ProfilePostsContainer;
