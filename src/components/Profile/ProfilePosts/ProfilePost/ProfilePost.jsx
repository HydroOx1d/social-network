import Avatar from "../../../../assetss/ava.jpg";
import './ProfilePost.css'

const ProfilePost = (props) => {
  return (
    <div className="profile__posts--block">
      <div className="profile__posts--header">
        <div className="profile__posts--avatar">
          <img src={Avatar} alt=""/>
        </div>
        <div className="profile__posts--name">
          <h4>Запашный Оксимирон</h4>
        </div>
      </div>
      <hr/>
      <div className="profile__posts--body">
        {props.text ? props.text : 'Пустое поле'}
      </div>
    </div>
  )
}

export default ProfilePost