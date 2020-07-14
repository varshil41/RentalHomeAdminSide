import http from "../../http-common";

class signIn {
  getFeedbacks() {
    return http.get("/admin/getFeedbacks");
  }
}

export default new signIn();
