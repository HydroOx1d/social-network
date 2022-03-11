import {NavLink} from "react-router-dom";
import './MessagesPerson.css'

const MessagesPerson = (props) => {
  return <NavLink to={'/messages/' + props.id} className="messages__person--item">{props.name}</NavLink>
}

export default MessagesPerson