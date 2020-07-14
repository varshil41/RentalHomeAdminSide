<template>
  <div class="wrapper">
    <adminHeader></adminHeader>

    <div class="main-panel">
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <span class="navbar-brand">Manage Properties</span>
            &nbsp;&nbsp;&nbsp;
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="material-icons">person</i>
              </a>

              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <button
                  name="btnsout"
                  type="submit"
                  @click="SignOut()"
                  class="dropdown-item"
                >SignOut</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div class="content">
        <div class="col-md-12">
          <h4>Property Images</h4>

          <img
            v-for="(image,index) in images"
            :key="index"
            class="zoom"
            :src="'http://localhost:3000/images/propertySubImage/' + image.propertyImage"
            style="width: 200px; height:220px; margin-left : 15px; margin-top : 10px;"
            alt="Product Image"
          />
        </div>
        <br />
        <br />
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Property Details</h4>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group bmd-form-group">Name : {{ name }}</div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group bmd-form-group">Type : {{ type }}</div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group bmd-form-group">Area : {{ area }}</div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group bmd-form-group">City : {{ city }}</div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group bmd-form-group">Pincode : {{ pincode }}</div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group bmd-form-group">BHK : {{ bhk }}</div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group bmd-form-group">Facility : {{ facility }}</div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group bmd-form-group">AddressLine1 : {{ add1 }}</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group bmd-form-group">AddressLine2 : {{ add2 }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card card-profile">
                <div class="card-body">
                  <img
                    height="220px"
                    width="220px"
                    :src="'http://localhost:3000/images/propertyImage/' + mainPic"
                  />
                  <br />
                  <br />
                  <h5>Owner : {{ uname }}</h5>
                  <h5>ContactNo : {{ cno }}</h5>

                  <h5>Email : {{ email }}</h5>

                  <h5>Rent : {{ rent }}</h5>
                  <h5>Status : {{ status }}</h5>
                  <p v-if="error1 !== ''" style="color: red;" align="center">{{ error1 }}</p>
                  <p v-if="error2 !== ''" style="color: green;" align="center">{{ error2 }}</p>

                  <button
                    v-if="status !== 'sold'"
                    class="btn btn-success btn-round"
                    @click="sold()"
                  >Property Sold</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <adminFooter></adminFooter>
    </div>
  </div>
</template>

<script>
import manage from "../../services/admin/manageProperties_service";

export default {
  data() {
    return {
      error: "",
      status: 0,
      type: "",
      requests: [],
      images: [],
      mainPic: "",
      type: "",
      name: "",
      bhk: "",
      facility: "",
      add1: "",
      add2: "",
      area: "",
      city: "",
      pincode: "",
      rent: "",
      status: "",
      uname: "",
      cno: "",
      email: "",
      error1: "",
      error2: ""
    };
  },
  methods: {
    SignOut() {
      this.$session.destroy();
      this.$router.push("/");
    },
    sold() {
      const data = {
        id: parseInt(this.$route.params.id)
      };
      manage
        .sold(data)
        .then(res => {
          if (res.data.result === 1) {
            this.error2 = "Status Successfully Updated!!!";
            this.error1 = "";
          }
        })
        .catch(err => {
          this.error1 = "Something Went Wrong!!!";
          this.error2 = "";
        });
    }
  },
  mounted() {
    if (this.$session.exists() === true) {
      const data = {
        id: parseInt(this.$route.params.id)
      };
      manage
        .getPropertyDetails(data)
        .then(res => {
          this.requests = res.data;

          this.mainPic = this.requests[0].mainImage;
          this.type = this.requests[0].propertyType;
          this.name = this.requests[0].propertyName;
          this.bhk = this.requests[0].bhk;
          this.facility = this.requests[0].facility;
          this.add1 = this.requests[0].addressLine1;
          this.add2 = this.requests[0].addressLine2;
          this.area = this.requests[0].area;
          this.city = this.requests[0].city;
          this.pincode = this.requests[0].pincode;
          this.rent = this.requests[0].rent;
          this.status = this.requests[0].status;
          this.uname = this.requests[0].table1.userName;
          this.cno = this.requests[0].table1.contactNo;
          this.email = this.requests[0].table1.userEmail;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      const data1 = {
        id: parseInt(this.$route.params.id)
      };
      manage
        .getImages(data1)
        .then(res => {
          this.images = res.data;
        })
        .catch(err => {});
    } else {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.zoom {
  transition: transform 0.3s;
}

.zoom:hover {
  transform: scale(1.5);
}
</style>
