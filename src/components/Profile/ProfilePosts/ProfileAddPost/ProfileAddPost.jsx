import Avatar from "../../../../assetss/ava.jpg";
import "./ProfileAddPost.css";

const ProfileAddPost = (props) => {
  return (
    <div className="profile__addpost">
      <div className="profile__addpost--form">
        <div className="profile__addpost--avatar">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="profile__addpost--add">
          <div className="profile__addpost--input">
            <textarea
              placeholder={"Что нового?"}
              value={props.profileAddPostValues}
              onChange={props.changeValue}
            />
          </div>
          <div className="profile__addpost--btn">
            <button onClick={() => props.addProfilePosts()}>
              Опубликовать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAddPost;
