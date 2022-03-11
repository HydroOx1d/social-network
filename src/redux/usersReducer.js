let initialState = {
  users: [],
  page: 1,
  count: 3,
  totalCount: 50,
  activePag: 1,
  preloader: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
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

export default usersReducer;
