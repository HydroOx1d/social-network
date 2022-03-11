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
  textAreaValue: "",
};

const messagesReducer = (state = initialState, action) => {
  if (action.type === "ADD-MESSAGES") {
    let obj = {
      id: 5,
      message: state.textAreaValue,
    };
    return {
      ...state,
      messagesDialogData: [...state.messagesDialogData, obj],
      textAreaValue: "",
    };
  } else if (action.type === "TEXT-AREA-UPDATE-VALUE") {
    return {
      ...state,
      textAreaValue: action.value,
    };
  }
  return state;
};

export const newAreaMessagesAction = (value) => {
  return {
    type: "TEXT-AREA-UPDATE-VALUE",
    value: value,
  };
};

export const addMessagesAction = () => {
  return {
    type: "ADD-MESSAGES",
  };
};

export default messagesReducer;
