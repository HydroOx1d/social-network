import axios from "axios";

const instanceOfAxios = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ec9763af-c974-482b-ad14-6196edbb10f2",
  },
});

export const accessToApiProp = {
  setAuthData() {
    return instanceOfAxios.get("auth/me").then((res) => res.data);
  },
  login(loginData) {
    return instanceOfAxios.post("auth/login", loginData).then((res) => res);
  },
  logout() {
    return instanceOfAxios.delete("auth/login").then((res) => res);
  },

  getUsers(count, pageSize) {
    return instanceOfAxios
      .get(`users?count=${count}&page=${pageSize}`)
      .then((res) => res.data);
  },
  follow(id) {
    return instanceOfAxios.post("follow/" + id).then((res) => res.data);
  },
  unFollow(id) {
    return instanceOfAxios.delete("follow/" + id).then((res) => res.data);
  },

  setProfileData(userId) {
    return instanceOfAxios.get("profile/" + userId).then((res) => res.data);
  },
  updateProfileAvatar(photos) {
    const formData = new FormData();
    formData.append("images", photos);
    return instanceOfAxios.put("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateProfileInfo(updatedInfo) {
    return instanceOfAxios.put("profile", updatedInfo);
  },

  getProfileStatus(userId) {
    return instanceOfAxios
      .get("profile/status/" + userId)
      .then((res) => res.data);
  },
  updateProfileStatus(status) {
    return instanceOfAxios
      .put("profile/status", { status: status })
      .then((res) => res);
  },
};
