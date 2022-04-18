import { connect } from "react-redux";
import Users from "./Users";
import {
  onFollowThunk,
  onUnFollowThunk,
  setActivePag,
  getUsersThunk,
} from "../../redux/usersReducer";
import React from "react";
import { compose } from "redux";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.count, this.props.page);
  }

  onSetActivePag = (p) => {
    this.props.setActivePag(p);
    this.props.getUsersThunk(this.props.count, p);
  };

  render() {
    return (
      <Users
        onSetActivePag={this.onSetActivePag}
        users={this.props.users}
        activePag={this.props.activePag}
        totalCount={this.props.totalCount}
        count={this.props.count}
        onFollow={this.props.onFollowThunk}
        onUnFollow={this.props.onUnFollowThunk}
        preloader={this.props.preloader}
        offPreloader={this.props.offPreloader}
        isFollowing={this.props.isFollowing}
        setIsFollowing={this.props.setIsFollowing}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    page: state.usersPage.page,
    totalPage: state.usersPage.totalPage,
    count: state.usersPage.count,
    totalCount: state.usersPage.totalCount,
    activePag: state.usersPage.activePag,
    preloader: state.usersPage.preloader,
    isFollowing: state.usersPage.isFollowing,
  };
};

export default compose(
  connect(mapStateToProps, {
    onFollowThunk,
    onUnFollowThunk,
    setActivePag,
    getUsersThunk,
  }),
)(UsersAPIComponent);
