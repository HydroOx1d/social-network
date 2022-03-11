let initialState = {
  profilePostData: [
    { id: 1, text: "О, вот и новый пост :)" },
    { id: 2, text: "О привет" },
    { id: 3, text: "Не тот танк, кто танк, а тот танк, кто тааанк!" },
  ],
  profileAddPostValues: "",
  profileData: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-PROFILE-POST": {
      let obj = {
        id: 4,
        text: state.profileAddPostValues,
      };
      return {
        ...state,
        profilePostData: [...state.profilePostData, obj],
        profileAddPostValues: "",
      };
    }
    case "ADD-PROFILE-POST-VALUE": {
      return {
        ...state,
        profileAddPostValues: action.value,
      };
    }
    case "SET-PROFILE": {
      return {
        ...state,
        profileData: action.profileData,
      };
    }
  }
  return state;
};

export const changeValueAction = (e) => {
  return { type: "ADD-PROFILE-POST-VALUE", value: e.target.value };
};
export const addProfilePost = () => {
  return { type: "ADD-PROFILE-POST" };
};

export const setProfile = (profileData) => {
  return { type: "SET-PROFILE", profileData };
};
export default profileReducer;
