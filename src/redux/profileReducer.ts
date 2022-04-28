import {accessToApiProp} from '../api/api'
import { ProfilePostDataType, ProfileDataType, ProfileDataPhotosType } from '../types/types';

const ADD_PROFILE_POST = "profileReducer/ADD-PROFILE-POST";
const SET_PROFILE = "profileReducer/SET-PROFILE";
const UPDATE_PROFILE_AVATAR = "profileReducer/UPDATE-PROFILE-AVATAR";
const SET_STATUS = "profileReducer/SET-STATUS";


type InitialStateType = {
  profilePostData: Array<ProfilePostDataType>;
  profileData: null | ProfileDataType;
  status: string
};

let initialState: InitialStateType = {
  profilePostData: [
    { id: 1, text: "О, вот и новый пост :)" },
    { id: 2, text: "О привет" },
    { id: 3, text: "Не тот танк, кто танк, а тот танк, кто тааанк!" },
  ],
  profileData: null,
  status: "",
};

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_PROFILE_POST: {
      let obj = {
        id: 4,
        text: action.desc,
      };
      return {
        ...state,
        profilePostData: [...state.profilePostData, obj],
      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        profileData: action.profileData,
      };
    }
    case UPDATE_PROFILE_AVATAR: {
      return {
        ...state,
        profileData: {...state.profileData, photos: action.photos}
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
  }
  return state;
};

type addProfilePostType = {
  type: typeof ADD_PROFILE_POST
  desc: string
}

export const addProfilePost = (desc: string): addProfilePostType => {
  return { type: ADD_PROFILE_POST, desc};
};

type SetProfileType = {
  type: typeof SET_PROFILE
  profileData: ProfileDataType
}

export const setProfile = (profileData: ProfileDataType): SetProfileType => {
  return { type: SET_PROFILE, profileData };
};

type SetStatusType = {
  type: typeof SET_STATUS
  status: string
}

export const setStatus = (status: string): SetStatusType => {
  return {
    type: SET_STATUS, status: status
  }
}

type UpdateProfileAvatarType = {
  type: typeof UPDATE_PROFILE_AVATAR
  photos: ProfileDataPhotosType
}

const updateProfileAvatar = (photos: ProfileDataPhotosType): UpdateProfileAvatarType => {
  return {
    type: UPDATE_PROFILE_AVATAR,
    photos
  }
}

export const setProfileDataThunk = (userId) => {
  return dispatch => {
    accessToApiProp.setProfileData(userId).then((data) => {
      dispatch(setProfile(data));
    });
  }
}

export const setStatusThunk = (userId) => (dispatch) => {
  accessToApiProp.getProfileStatus(userId).then((data) => {
    let newData = data ?? ''
    dispatch(setStatus(newData));
  });
} 
export const updateStatusThunk = (status) => (dispatch) => {
  accessToApiProp.updateProfileStatus(status).then(res => {
    if(res.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}

export const uploadProfileAvatar = (photos) => {
  return dispatch => {
    accessToApiProp.updateProfileAvatar(photos).then(res => {
      if(res.data.resultCode === 0) {
        dispatch(updateProfileAvatar(res.data.data.photos));
      }
    })
  }
}

export const updateProfileInfo = (updatedInfo) => {
  return (dispatch, getState) => {
    const userId = getState().auth.id;
    accessToApiProp.updateProfileInfo(updatedInfo).then((res) => {
      if(res.data.resultCode === 0) {
        dispatch(setProfileDataThunk(userId));
      }
    });
  }
}

export default profileReducer;
