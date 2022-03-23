import {
  addMessagesAction,
  newAreaMessagesAction,
} from "../../redux/messagesReducer";
import Messages from "./Messages";
import { connect } from "react-redux";
import {requireAuthHOC} from '../../hoc/requireAuth'
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    state: state.messages
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

export default compose(
  connect(
  mapStateToProps,
  mapDispatchToProps),)(Messages)
