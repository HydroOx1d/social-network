import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <div className="profile__info">
      <div className="profile__info--inner">
        <div className="profile__info--header">
          <h2 className="profile__info--title">Краткая информация</h2>
        </div>
        <div className="profile__info--body">
          <ul className="profile__info--group">
            <li className="profile__info--item">
              Дата рождения: <strong>04.10.04</strong>
            </li>
            <li className="profile__info--item">
              Город: <strong>Токмок</strong>
            </li>
            <li className="profile__info--item">
              Образование: <strong>ПЛКиИТ №98 </strong>
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
        </div>
      </div>
      <ProfileStatus
        statusText={props.statusText}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
