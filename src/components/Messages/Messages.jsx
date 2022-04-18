import './Messages.css'
import MessagesPerson from "./MessagesPerson/MessagesPerson";
import MessagesDialog from "./MessagesDialog/MessagesDialog";
import { Navigate } from 'react-router-dom';
import AddMessage from './AddMessage/AddMessage';

const Messages = (props) => {

  return (
    <div className={'messages'}>
      <div className="messages__person">
        {
          props.state.messagesPersonData.map(person => <MessagesPerson name={person.name} id={person.id} key={person.id}/>)
        }
      </div>
      <div className="messages__dialogs">
        <div className="messages__dialogs--chat">
          {
            props.state.messagesDialogData.map(message => <MessagesDialog message={message.message} key={message.id}/>)
          }
        </div>
        <AddMessage addMessages={props.addMessages}/>
      </div>
    </div>
  )
}


export default Messages