import { connect } from "react-redux";
import Users from "./Users";
import {
  offPreloader,
  onFollow,
  onSetUsers,
  setActivePag,
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.onSetUsers(res.data.items);
        this.props.offPreloader(false);
      });
  }

  onSetActivePag = (p) => {
    this.props.setActivePag(p);
    this.props.offPreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${p}`
      )
      .then((res) => {
        this.props.onSetUsers(res.data.items);
        this.props.offPreloader(false);
      });
  };

  render() {
    return (
      <Users
        onSetActivePag={this.onSetActivePag}
        users={this.props.users}
        activePag={this.props.activePag}
        totalCount={this.props.totalCount}
        count={this.props.count}
        onFollow={this.props.onFollow}
        preloader={this.props.preloader}
        offPreloader={this.props.offPreloader}
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
  };
};

const UsersContainer = connect(mapStateToProps, {
  onFollow,
  onSetUsers,
  setActivePag,
  offPreloader,
})(UsersAPIComponent);

export default UsersContainer;
