import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setProfile } from "../../redux/profileReducer";
import {useMatch} from 'react-router-dom'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
      .then((res) => {
        this.props.setProfile(res.data);
      });
  }

  render() {
    return <Profile {...this.props} paramss={this.paramss}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    profileData: state.profile.profileData,
  };
};

export const withRouter = (Component) =>{

    let RouterComponent = (props) => {

            const match = useMatch('/profile/:userId');

            return <Component {...props} match={match}/>;

    }

    return RouterComponent;

}

const withRouters = withRouter(ProfileContainer)



export default connect(mapStateToProps, { setProfile })(withRouters);
