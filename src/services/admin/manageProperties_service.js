import http from "../../http-common";

class app {
  getBunglows() {
    return http.get("/admin/properties/getBunglows");
  }
  getFlats() {
    return http.get("/admin/properties/getFlats");
  }
  getTenaments() {
    return http.get("/admin/properties/getTenaments");
  }
  getUnsold() {
    return http.get("/admin/properties/getUnsold");
  }
  sold(data) {
    return http.post("/admin/properties/sold", data);
  }
  getImages(data) {
    return http.post("/admin/properties/getImages", data);
  }
  getPropertyDetails(data) {
    return http.post("/admin/properties/getPropertyDetails", data);
  }
}

export default new app();
