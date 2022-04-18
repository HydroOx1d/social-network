import { useState } from "react";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import { Form, Field } from "react-final-form";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="profile__info">
      <div className="profile__info--inner">
        <div className="profile__info--header">
          <h2 className="profile__info--title">Краткая информация</h2>
        </div>
        <div className="profile__info--body">
          {!editMode ? (
            <ul className="profile__info--group">
              <li className="profile__info--item">
                В поисках работы:{" "}
                <strong>
                  {!props.profileData.lookingForAJob ? "Нет" : "Да"}
                </strong>
              </li>
              <li className="profile__info--item">
                Должность:{" "}
                <strong>
                  {props.profileData.lookingForAJobDescription
                    ? props.profileData.lookingForAJobDescription
                    : "Не указано"}
                </strong>
              </li>
              <li className="profile__info--item">
                Обо мне:{" "}
                <strong>
                  {!props.profileData.aboutMe
                    ? "Не указано"
                    : props.profileData.aboutMe}
                </strong>
              </li>
            </ul>
          ) : (
            <Form initialValues={props.profileData} onSubmit={(formObj) => {
              props.updateProfileInfo(formObj);
              setEditMode(false)
            }}>
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <ul className="profile__info--group">
                    <Field name="lookingForAJob" type="checkbox">
                      {({ input }) => (
                        <li className="profile__info--item">
                          В поисках работы: <input type="checkbox" {...input} />
                        </li>
                      )}
                    </Field>
                    <Field name="lookingForAJobDescription">
                      {({ input }) => (
                        <li className="profile__info--item">
                          Должность: <input type="text" {...input} />
                        </li>
                      )}
                    </Field>
                    <Field name="aboutMe">
                      {({ input }) => (
                        <li className="profile__info--item">
                          Обо мне: <input type="text" {...input} />
                        </li>
                      )}
                    </Field>
                  </ul>
                  <div
                    style={{ textAlign: "right" }}
                    className="profile__info-save"
                  >
                    <button>Save</button>
                  </div>
                </form>
              )}
            </Form>
          )}
        </div>
        {props.isOwner ? (
          <div style={{ textAlign: "right" }} className="profile__info-save">
            {!editMode ? (
              <button onClick={() => setEditMode(true)}>Edit</button>
            ) : null}
          </div>
        ) : null}
      </div>
      <ProfileStatus
        isOwner={props.isOwner}
        statusText={props.statusText}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
