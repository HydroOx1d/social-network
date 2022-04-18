let initialState = {
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
    { id: 3, message: "Как сам?" },
  ],
};

const messagesReducer = (state = initialState, action) => {
  if (action.type === "ADD-MESSAGES") {
    let obj = {
      id: 4, 
      message: action.message
    }
    return {
      ...state,
      messagesDialogData: [...state.messagesDialogData, obj],
    };
  }
  return state;
};


export const addMessagesAction = (message) => {
  return {
    type: "ADD-MESSAGES",
    message
  };
};

export default messagesReducer;
