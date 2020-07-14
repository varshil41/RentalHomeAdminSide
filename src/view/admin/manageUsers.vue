<template>
  <div class="wrapper">
    <adminHeader></adminHeader>

    <div class="main-panel">
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <span class="navbar-brand">Client List</span>
            &nbsp;&nbsp;&nbsp;
            <button
              type="submit"
              class="btn btn-primary"
              @click="owner()"
            >Owner</button>
            <button type="submit" class="btn btn-primary" @click="tenant()">Tenant</button>
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

      <div class="content" v-if="status === 1">
        <div class="col-md-12">
          <div class="card card-plain">
            <div class="card-header card-header-primary">
              <h4 class="card-title mt-0">{{ type }} List</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead class>
                    <tr>
                      <th>UserName</th>
                      <th>ContactNo</th>
                      <th>EmailAddress</th>
                      <th>Gender</th>
                      <th>City</th>
                      <th>Pincode</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user,index) in userlist" :key="index">
                      <td>{{ user.userName }}</td>
                      <td>{{ user.contactNo }}</td>
                      <td>{{ user.userEmail }}</td>
                      <td>{{ user.gender }}</td>
                      <td>{{ user.city }}</td>
                      <td>{{ user.pincode }}</td>
                      <td>
                        <button
                          v-if="user.userStatus === 0"
                          type="submit"
                          class="btn btn-danger"
                          @click="blockUser(user.userId)"
                        >Block</button>

                        <button
                          type="submit"
                          v-if="user.userStatus === 1"
                          class="btn btn-success"
                          @click="unblockUser(user.userId)"
                        >UnBlock</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
import manage from "../../services/admin/manageUsers_service";

export default {
  data() {
    return {
      error: "",
      status: 0,
      type: "",
      userlist: []
    };
  },
  methods: {
    SignOut() {
      this.$session.destroy();
      this.$router.push("/");
    },
    owner() {
      this.status = 1;
      this.type = "Owner";
      manage
        .getUsers(1)
        .then(res => {
          this.userlist = res.data;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    tenant() {
      this.status = 1;
      this.type = "Tenant";
      manage
        .getUsers(2)
        .then(res => {
          this.userlist = res.data;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    blockUser(id1) {
      const data = {
        id: id1
      };
      manage
        .blockUser(data)
        .then(res => {
          if (res.data.result === 1) {
            this.$router.go();
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    unblockUser(id1) {
      const data = {
        id: id1
      };
      manage
        .unblockUser(data)
        .then(res => {
          if (res.data.result === 1) {
            this.$router.go();
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    }
  },
  mounted() {
    if (this.$session.exists() === true) {
      this.owner();
    } else {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
