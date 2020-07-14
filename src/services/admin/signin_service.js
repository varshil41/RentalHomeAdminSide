import http from "../../http-common";

class signIn {
  sin(data) {
    return http.post("/admin/signin", data);
  }
  forgotPwd(data) {
    return http.post("/admin/forgotPwd", data);
  }
}

export default new signIn();
