import {accessToApiProp} from '../api/api'

let initialState = {
  profilePostData: [
    { id: 1, text: "О, вот и новый пост :)" },
    { id: 2, text: "О привет" },
    { id: 3, text: "Не тот танк, кто танк, а тот танк, кто тааанк!" },
  ],
  profileData: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-PROFILE-POST": {
      let obj = {
        id: 4,
        text: action.desc,
      };
      return {
        ...state,
        profilePostData: [...state.profilePostData, obj],
      };
    }
    case "SET-PROFILE": {
      return {
        ...state,
        profileData: action.profileData,
      };
    }
    case "UPDATE-PROFILE-AVATAR": {
      return {
        ...state,
        profileData: {...state.profileData, photos: action.photos}
      }
    }
    case "SET-STATUS": {
      return {
        ...state,
        status: action.status
      }
    }
  }
  return state;
};
export const addProfilePost = (desc) => {
  return { type: "ADD-PROFILE-POST", desc};
};

export const setProfile = (profileData) => {
  return { type: "SET-PROFILE", profileData };
};

export const setStatus = (status) => {
  return {
    type: 'SET-STATUS', status: status
  }
}

const updateProfileAvatar = (photos) => {
  return {
    type: 'UPDATE-PROFILE-AVATAR',
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
