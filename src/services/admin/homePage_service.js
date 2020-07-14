import http from "../../http-common";

class home {
  getOwners() {
    return http.get("/admin/home/totalOwners");
  }
  getTenants() {
    return http.get("/admin/home/totalTenants");
  }
  getProperties() {
    return http.get("/admin/home/totalProperties");
  }
  getSoldProperties() {
    return http.get("/admin/home/totalSoldProperties");
  }
  getAppointmentReq() {
    return http.get("/admin/home/getReqs");
  }
}

export default new home();
