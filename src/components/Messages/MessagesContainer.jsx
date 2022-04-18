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
    addMessages(obj) {
      dispatch(addMessagesAction(obj));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  requireAuthHOC
)(Messages);
