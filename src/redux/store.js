import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";


const store = {
  subscriber() {
    console.log('Halo')
  },
  subscribe(observer) {
    this.subscriber = observer
  },
  getState() {
    return this.state
  },
  state: {
    profile: {
      profilePostData: [
        {id: 1, text: 'О, вот и новый пост :)'},
        {id: 2, text: 'О привет'},
        {id: 3, text: 'Не тот танк, кто танк, а тот танк, кто тааанк!'},
      ],
      profileAddPostValues: ''
    },
    messages: {
      messagesPersonData: [
        {id: 1, name: 'Томми'},
        {id: 2, name: 'Артур'},
        {id: 3, name: 'Джон'},
        {id: 4, name: 'Полли'},
        {id: 5, name: 'Эйда'},
      ],
      messagesDialogData: [
        {id: 1, message: 'Салам'},
        {id: 2, message: 'Аллейкум'},
        {id: 3, message: 'Как сам?'},
      ],
      textAreaValue: ''
    }
  },
  dispatch(action) {
    this.state.profile = profileReducer(this.state.profile, action)
    this.state.messages = messagesReducer(this.state.messages, action)

    this.subscriber(this.state)
  }
}
window.state = store.state


export default store