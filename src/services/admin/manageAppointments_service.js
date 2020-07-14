import http from "../../http-common";

class app {
  getAcceptedReq() {
    return http.get("/admin/appointment/getAcceptedReqs");
  }
  getRejectedReq() {
    return http.get("/admin/appointment/getRejectedReqs");
  }
  getCompletedReq() {
    return http.get("/admin/appointment/getCompletedReqs");
  }
  getPendingReq() {
    return http.get("/admin/appointment/getPendingReqs");
  }
  acceptReq(data) {
    return http.post("/admin/appointment/acceptReq", data);
  }
  completedApp(data) {
    return http.post("/admin/appointment/completedApp", data);
  }
  rejectReq(data) {
    return http.post("/admin/appointment/rejectReq", data);
  }
  getProperty() {
    return http.get("/admin/appointment/getProperties");
  }
  getTenant() {
    return http.get("/admin/appointment/getTenants");
  }
  makeAppEntry(data) {
    return http.post("/admin/appointment/makeAppEntry", data);
  }
}

export default new app();
