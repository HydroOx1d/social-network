import { accessToApiProp } from "../api/api";
import { UsersType } from '../types/types';

const FOLLOW = "usersReducer/FOLLOW";
const UN_FOLLOW = "usersReducer/UN-FOLLOW";
const SET_USERS = "usersReducer/SET-USERS";
const SET_ACTIVE_PAG = "usersReducer/SET-ACTIVE-PAG";
const SET_TOTAL_COUNT = "usersReducer/SET-TOTAL-COUNT";
const PRELOADER_OFF = "usersReducer/PRELOADER-OFF";
const IS_FOLLOWING = "usersReducer/IS-FOLLOWING";



type InitialStateType = {
  users: Array<UsersType>
  page: number
  count: number
  totalCount: number
  activePag: number
  preloader: boolean
  isFollowing: Array<number>
}

let initialState: InitialStateType = {
  users: [],
  page: 1,
  count: 10,
  totalCount: 1,
  activePag: 1,
  preloader: true,
  isFollowing: [],
};

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
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
    case UN_FOLLOW: {
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
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case SET_ACTIVE_PAG: {
      return {
        ...state,
        activePag: action.pageNumber,
      };
    }
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalCount: action.totalCount
      };
    }
    case PRELOADER_OFF: {
      return {
        ...state,
        preloader: action.bool,
      };
    }
    case IS_FOLLOWING: {
      return {
        ...state,
        isFollowing: action.bool
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

type OnFollowType = {
  type: typeof FOLLOW
  userId: number
}

export const onFollow = (userId: number): OnFollowType => {
  return {
    type: FOLLOW,
    userId,
  };
};

type OnUnFollowType = {
  type: typeof UN_FOLLOW
  userId: number
}

export const onUnFollow = (userId: number): OnUnFollowType => {
  return {
    type: UN_FOLLOW,
    userId,
  };
};

type OnSetUsersType = {
  type: typeof SET_USERS
  users: Array<UsersType>
}

export const onSetUsers = (users: Array<UsersType>): OnSetUsersType => {
  return {
    type: SET_USERS,
    users,
  };
};

type SetActivePagType = {
  type: typeof SET_ACTIVE_PAG
  pageNumber: number
}

export const setActivePag = (pageNumber: number): SetActivePagType => {
  return {
    type: SET_ACTIVE_PAG,
    pageNumber,
  };
};

type SetTotalCountType = {
  type: typeof SET_TOTAL_COUNT
  totalCount: number
}

const setTotalCount = (totalCount: number): SetTotalCountType => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount
  };
}

type OffPreloaderType = {
  type: typeof PRELOADER_OFF
  bool: boolean
}

export const offPreloader = (bool: boolean): OffPreloaderType => {
  return {
    type: PRELOADER_OFF,
    bool,
  };
};

type SetIsFollowingType = {
  type: typeof IS_FOLLOWING
  bool: boolean
  userId: number
}
export const setIsFollowing = (bool: boolean, userId: number): SetIsFollowingType => {
  return {
    type: IS_FOLLOWING,
    bool,
    userId,
  };
};

export const getUsersThunk = (count, pageSize) => {
  return (dispatch) => {
    dispatch(offPreloader(true));
    accessToApiProp.getUsers(count, pageSize).then((data) => {
      dispatch(onSetUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
      dispatch(offPreloader(false));
    });
  };
};


export const onFollowThunk = (userId) => {
  return dispatch => {
    dispatch(setIsFollowing(true, userId));
    accessToApiProp.follow(userId).then((data) => {
      if (data.resultCode === 0) {
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
      if (data.resultCode === 0) {
        dispatch(onUnFollow(userId));
        dispatch(setIsFollowing(false, userId));
      }
    });
  }
}

export default usersReducer;
