<template>
  <div class="wrapper">
    <adminHeader></adminHeader>

    <div class="main-panel">
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <span class="navbar-brand">Your Profile</span>
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
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Edit Profile</h4>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="form-group bmd-form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Username"
                          v-model="uname"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group bmd-form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="password"
                          maxlength="8"
                          v-model="pwd"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group bmd-form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="UserEmail"
                          disabled
                          v-model="email"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group bmd-form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="ContactNo"
                          maxlength="10"
                          @keypress="cno1"
                          v-model="cno"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group bmd-form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="AddressLine1"
                          v-model="add1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group bmd-form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="AddressLine2"
                          v-model="add2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group bmd-form-group">
                        <input type="radio" value="male" v-model="gender" />&nbsp; Male&nbsp;
                        <input type="radio" value="female" v-model="gender" />&nbsp; Female&nbsp;
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group bmd-form-group">
                        <input type="text" class="form-control" placeholder="City" v-model="city" />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group bmd-form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Pincode"
                          maxlength="6"
                          v-model="pincode"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <p v-if="error !== ''" style="color: red;" align="center">{{ error }}</p>
                  <p v-if="error1 !== ''" style="color: green;" align="center">{{ error1 }}</p>
                  <button
                    type="submit"
                    class="btn btn-primary pull-right"
                    @click="update()"
                  >Update Profile</button>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-profile">
                <div class="card-avatar">
                  <img v-if="pic === ''" class="img" src />
                  <img
                    v-else
                    class="img"
                    :src="'http://localhost:3000/images/userImage/' + pic"
                  />
                </div>
                <div class="card-body">
                  <h6 class="card-category text-gray">Admin</h6>
                  <h4 class="card-title">{{ uname }}</h4>

                  <form enctype="multipart/form-data" @submit.prevent="sendFile">
                    <input style="margin-left: 50px;" type="file" ref="file" @change="selectedFile" />

                    <p v-if="imgError !== ''" style="color: red;" align="center">{{ imgError }}</p>
                    <p v-if="imgError1 !== ''" style="color: green;" align="center">{{ imgError1 }}</p>

                    <button class="btn btn-primary btn-round">Upload</button>
                  </form>
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
import manage from "../../services/admin/profile_service";

export default {
  data() {
    return {
      error: "",
      uname: "",
      add1: "",
      add2: "",
      pincode: "",
      email: "",
      city: "",
      pic: "",
      cno: "",
      pwd: "",
      gender: "",
      error1: "",
      file: "",
      image: "",
      imgError: "",
      imgError1: ""
    };
  },
  methods: {
    selectedFile() {
      this.file = this.$refs.file.files[0];
    },
    cno1(event) {
      if (event.keyCode >= 48 && event.keyCode <= 57) {
        return true;
      } else {
        return event.preventDefault();
      }
    },
    sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.imgError1 = "Image Uploaded";
            this.imgError = "";
            this.pic = response.name;
          } else {
            this.imgError = "Error occured!!!";

            this.imgError1 = "";
          }
        })
        .catch(err => {
          this.imgError = "Something Went Wrong!!!";
          this.imgError1 = "";
        });
    },
    SignOut() {
      this.$session.destroy();
      this.$router.push("/");
    },
    update() {
      if (this.uname === "") {
        this.error = "Please enter Username";
      } else if (this.pwd === "") {
        this.error = "Please enter password";
      } else if (this.pwd.length !== 8) {
        this.error = "Password must be of 8 characters";
      } else if (this.cno === "") {
        this.error = "Please enter contactNo";
      } else if (this.cno.length !== 10) {
        this.error = "Wrong ContactNO Entered";
      } else if (this.gender === "") {
        this.error = "Please select your gender";
      } else if (this.add1 === "") {
        this.error = "Please enter address";
      } else if (this.add2 === "") {
        this.error = "Please enter address";
      } else if (this.city === "") {
        this.error = "Please enter city";
      } else if (this.pincode === "") {
        this.error = "Please enter pincode";
      } else {
        const data = {
          userName: this.uname,
          userPassword: this.pwd,
          userEmail: this.email,
          contactNo: this.cno,
          gender: this.gender,
          addressLine1: this.add1,
          addressLine2: this.add2,
          city: this.city,
          pincode: this.pincode,
          profilePic: this.pic
        };

        manage
          .updateDetails(data)
          .then(res => {
            if (res.data.result === 1) {
              this.error1 = "Update Successfull!!";
              this.error = "";
            }
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
            this.error1 = "";
          });
      }
    }
  },
  mounted() {
    if (this.$session.exists() === true) {
      manage
        .getDetails(this.$session.get("email"))
        .then(res => {
          this.uname = res.data[0].userName;
          this.pwd = res.data[0].userPassword;
          this.email = res.data[0].userEmail;
          this.cno = res.data[0].contactNo;
          this.gender = res.data[0].gender;
          this.add1 = res.data[0].addressLine1;
          this.add2 = res.data[0].addressLine2;
          this.city = res.data[0].city;
          this.pincode = res.data[0].pincode;
          this.pic = res.data[0].profilePic;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
          this.error1 = "";
        });
    } else {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
