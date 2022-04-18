import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Background from "../../assetss/profile-background.jpg";
import Avatar from "../../assetss/ava.jpg";
import Edit from '../../assetss/edit.png'
import "./Profile.css";
import ProfilePostsContainer from "./ProfilePosts/ProfilePosts";

const Profile = (props) => {
  if (!props.profileData) {
    return <div>Loading...</div>;
  }

  const onUploadPhoto = (e) => {
    // e.target.files[0]
    props.uploadProfileAvatar(e.target.files[0]);
  }

  return (
    <section className="profile">
      <div className="profile__view">
        <div className="profile__background">
          <img
            src={props.profileData.photos.large || Background}
            alt="BACKGROUND"
          />
        </div>
        <div className="profile__avatar">
          <img
            className="avatar-img"
            src={props.profileData.photos.small || Avatar}
            alt="AVATAR"
          />
          {props.isOwner && (
            <div className="profile__upload-image">
              <label htmlFor="avatar">
                <img src={Edit} alt="edit" />
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={onUploadPhoto}
              />
            </div>
          )}
        </div>
        <div className="profile__name">
          <h2>{props.profileData.fullName}</h2>
        </div>
      </div>
      <div className="profile__information">
        <ProfilePostsContainer />
        <ProfileInfo
          updateProfileInfo={props.updateProfileInfo}
          isOwner={props.isOwner}
          profileData={props.profileData}
          statusText={props.status}
          updateStatus={props.updateStatusThunk}
        />
      </div>
    </section>
  );
};

export default Profile;
