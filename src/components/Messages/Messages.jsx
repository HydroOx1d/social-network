import './Messages.css'
import MessagesPerson from "./MessagesPerson/MessagesPerson";
import MessagesDialog from "./MessagesDialog/MessagesDialog";

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
        <div className="messages__dialogs--form">
          <textarea className={'messages__dialogs--addmessage'} value={props.state.textAreaValue} onChange={(e) => props.newAreaMessages(e.target.value)}/>
          <button onClick={props.addMessages} className="messages__dialogs--btn">Отправить</button>
        </div>
      </div>
    </div>
  )
}


export default Messages