import { accessToApiProp } from "../api/api";

let initialState = {
  users: [],
  page: 1,
  count: 3,
  totalCount: 60,
  activePag: 1,
  preloader: true,
  isFollowing: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case "UN-FOLLOW": {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    case "SET-USERS": {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case "SET-ACTIVE-PAG": {
      return {
        ...state,
        activePag: action.pageNumber,
      };
    }
    case "PRELOADER-OFF": {
      return {
        ...state,
        preloader: action.bool,
      };
    }
    case "IS-FOLLOWING": {
      return {
        ...state,
        isFollowing: action.bool
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const onFollow = (userId) => {
  return {
    type: "FOLLOW",
    userId,
  };
};

export const onUnFollow = (userId) => {
  return {
    type: "UN-FOLLOW",
    userId,
  };
};

export const onSetUsers = (users) => {
  return {
    type: "SET-USERS",
    users,
  };
};

export const setActivePag = (pageNumber) => {
  return {
    type: "SET-ACTIVE-PAG",
    pageNumber,
  };
};

export const offPreloader = (bool) => {
  return {
    type: "PRELOADER-OFF",
    bool,
  };
};
export const setIsFollowing = (bool, userId) => {
  return {
    type: "IS-FOLLOWING",
    bool,
    userId,
  };
};

export const getUsersThunk = (count, pageSize) => {
  return (dispatch) => {
    dispatch(offPreloader(true));
    accessToApiProp.getUsers(count, pageSize).then((data) => {
      dispatch(onSetUsers(data.items));
      dispatch(offPreloader(false));
    });
  };
};


export const onFollowThunk = (userId) => {
  return dispatch => {
    dispatch(setIsFollowing(true, userId));
    accessToApiProp.follow(userId).then((data) => {
      if (data.resultCode == 0) {
        dispatch(onFollow(userId));
        dispatch(setIsFollowing(false, userId));
      }
    });
  }
}

export const onUnFollowThunk = (userId) => {
  return dispatch => {
    dispatch(setIsFollowing(true, userId));
    accessToApiProp.unFollow(userId).then((data) => {
      if (data.resultCode == 0) {
        dispatch(onUnFollow(userId));
        dispatch(setIsFollowing(false, userId));
      }
    });
  }
}

export default usersReducer;
