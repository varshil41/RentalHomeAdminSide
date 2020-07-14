import http from "../../http-common";

class signIn {
  blockUser(data) {
    return http.post("/admin/blockUser", data);
  }
  unblockUser(data) {
    return http.post("/admin/unblockUser", data);
  }
  getUsers(id) {
    return http.get(`/admin/getUsers/${id}`);
  }
}

export default new signIn();
