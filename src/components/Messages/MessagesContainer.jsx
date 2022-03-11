import {
  addMessagesAction,
  newAreaMessagesAction,
} from "../../redux/messagesReducer";
import Messages from "./Messages";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    state: state.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newAreaMessages(event) {
      dispatch(newAreaMessagesAction(event));
    },
    addMessages() {
      dispatch(addMessagesAction());
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
