<template>
  <div class="wrapper">
    <adminHeader></adminHeader>

    <div class="main-panel">
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <span class="navbar-brand">Home</span>
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
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                  </div>
                  <p class="card-category">Total Owners</p>
                  <h3 class="card-title">{{ totalOwners }}</h3>
                </div>
                <div class="card-footer"></div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                  </div>
                  <p class="card-category">Total Tenants</p>
                  <h3 class="card-title">{{ totalTenants }}</h3>
                </div>
                <div class="card-footer"></div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">store</i>
                  </div>
                  <p class="card-category">Total Properties</p>
                  <h3 class="card-title">{{ totalProperties }}</h3>
                </div>
                <div class="card-footer"></div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">store</i>
                  </div>
                  <p class="card-category">Sold Properties</p>
                  <h3 class="card-title">{{ totalSoldProperties }}</h3>
                </div>
                <div class="card-footer"></div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="card">
                <div class="card-header card-header-info">
                  <h4 class="card-title">Appointment Requests</h4>
                  <p class="card-category">List of newely arrived appointment request</p>
                </div>

                <h4 class="text-warning" v-if="requests.length === 0" align="center">
                  <br />No Pending Requests Available
                  <br />
                  <br />
                </h4>

                <div v-else class="card-body table-responsive">
                  <table class="table table-hover">
                    <thead class="text-warning">
                      <tr>
                        <th>UserName</th>
                        <th>Type</th>
                        <th>ContactNo</th>
                        <th>PropertyName</th>
                        <th>PropertyType</th>
                        <th>City</th>
                        <th>Area</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(app,index) in requests" :key="index">
                        <td>{{ app.table1.userName }}</td>
                        <td v-if="app.table1.userType === 1">{{ "Owner" }}</td>
                        <td v-if="app.table1.userType === 2">{{ "Tenant" }}</td>
                        <td>{{ app.table1.contactNo }}</td>
                        <td>{{ app.table2.propertyName }}</td>
                        <td>{{ app.table2.propertyType }}</td>
                        <td>{{ app.table2.city }}</td>
                        <td>{{ app.table2.area }}</td>
                      </tr>
                    </tbody>
                  </table>
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
import manage from "../../services/admin/homePage_service";
export default {
  data() {
    return {
      error: "",
      totalProperties: 0,
      totalOwners: 0,
      totalTenants: 0,
      totalSoldProperties: 0,
      requests: []
    };
  },
  methods: {
    SignOut() {
      this.$session.destroy();
      this.$router.push("/");
    }
  },
  mounted() {
    if (this.$session.exists() === true) {
      manage
        .getAppointmentReq()
        .then(res => {
          this.requests = res.data;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      manage
        .getOwners()
        .then(res => {
          this.totalOwners = res.data.result;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      manage
        .getTenants()
        .then(res => {
          this.totalTenants = res.data.result;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      manage
        .getProperties()
        .then(res => {
          this.totalProperties = res.data.result;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      manage
        .getSoldProperties()
        .then(res => {
          this.totalSoldProperties = res.data.result;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    } else {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
