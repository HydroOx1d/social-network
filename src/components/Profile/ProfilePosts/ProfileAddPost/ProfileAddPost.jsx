import { Form, Field } from "react-final-form";
import Avatar from "../../../../assetss/ava.jpg";
import "./ProfileAddPost.css";

const ProfileAddPost = (props) => {
  return (
    <div className="profile__addpost">
      <div className="profile__addpost--form">
        <div className="profile__addpost--avatar">
          <img src={Avatar} alt="Avatar" />
        </div>

        <Form
          onSubmit={(formObj) => {
            props.addProfilePosts(formObj.description);
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="profile__addpost--add">
              <div className="profile__addpost--input">
                <Field name="description">
                  {({ input }) => <textarea placeholder={"Что нового?"} {...input}/>}
                </Field>
              </div>
              <div className="profile__addpost--btn">
                <button>Опубликовать</button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};

export default ProfileAddPost;
