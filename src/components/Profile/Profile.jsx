import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Background from "../../assetss/profile-background.jpg";
import Avatar from "../../assetss/ava.jpg";
import "./Profile.css";
import ProfilePostsContainer from "./ProfilePosts/ProfilePosts";

const Profile = (props) => {
  if (!props.profileData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="profile">
      <div className="profile__view">
        <div className="profile__background">
          <img src={props.profileData.photos.large || Background} alt="BACKGROUND" />
        </div>
        <div className="profile__avatar">
          <img src={props.profileData.photos.small || Avatar} alt="AVATAR" />
        </div>
        <div className="profile__name">
          <h2>{props.profileData.fullName}</h2>
        </div>
      </div>
      <div className="profile__information">
        <ProfilePostsContainer />
        <ProfileInfo profileData={props.profileData} statusText={props.status} updateStatus={props.updateStatusThunk}/>
      </div>
    </section>
  );
};

export default Profile;
