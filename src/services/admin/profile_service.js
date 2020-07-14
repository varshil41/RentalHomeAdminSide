import http from "../../http-common";

class profile {
  getDetails(id) {
    return http.get(`/admin/getAdminDetails/${id}`);
  }
  updateDetails(data) {
    return http.post("/admin/updateDetails", data);
  }
  uploadImage(data) {
    return http.post("/admin/profile/uploadImage", data);
  }
}

export default new profile();
