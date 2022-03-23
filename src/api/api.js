import axios from "axios";

const instanceOfAxios = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d4922305-4c8c-4604-9745-bae759e2c1e6",
  },
});

export const accessToApiProp = {
  setAuthData() {
    return instanceOfAxios.get("auth/me").then((res) => res.data);
  },
  login(loginData) {
    return instanceOfAxios.post('auth/login', loginData).then(res => res)
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

  getProfileStatus(userId) {
    return instanceOfAxios.get('profile/status/' + userId ).then(res => res.data)
  },
  updateProfileStatus(status) {
    return instanceOfAxios.put('profile/status', {status: status}).then(res => res)
  }
};
