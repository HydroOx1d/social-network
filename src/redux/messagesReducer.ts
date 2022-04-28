const ADD_MESSAGES = 'messagesReducer/ADD-MESSAGES'

type messagesPersonDataType = {
  id: number
  name: string
}
type messagesDialogDataType = {
  id: number;
  message: string;
};

type InitialStateType = {
  messagesPersonData: Array<messagesPersonDataType>
  messagesDialogData: Array<messagesDialogDataType>
}

let initialState: InitialStateType = {
  messagesPersonData: [
    { id: 1, name: "Томми" },
    { id: 2, name: "Артур" },
    { id: 3, name: "Джон" },
    { id: 4, name: "Полли" },
    { id: 5, name: "Эйда" },
  ],
  messagesDialogData: [
    { id: 1, message: "Салам" },
    { id: 2, message: "Аллейкум" },
    { id: 3, message: "Как сам?"},
  ],
};

const messagesReducer = (state = initialState, action: any): InitialStateType => {
  if (action.type === ADD_MESSAGES) {
    let obj = {
      id: 4, 
      message: action.message,
    }
    return {
      ...state,
      messagesDialogData: [...state.messagesDialogData, obj],
    };
  }
  return state;
};

type AddMessagesActionType = {
  type: typeof ADD_MESSAGES
  message: string
};

export const addMessagesAction = (message: string): AddMessagesActionType => {
  return {
    type: ADD_MESSAGES,
    message,
  };
};

export default messagesReducer;
