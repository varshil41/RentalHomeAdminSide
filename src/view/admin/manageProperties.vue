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

      <div class="content" v-if="status === 1">
        <div class="col-md-12">
          <button type="submit" class="btn btn-primary" @click="bunglows()">Bunglows</button>
          <button type="submit" class="btn btn-primary" @click="flats()">Flats</button>
          <button type="submit" class="btn btn-primary" @click="tenaments()">Tenaments</button>
          <button type="submit" class="btn btn-primary" @click="unsold()">UnSold Properties</button>

          <p v-if="error !== ''" style="color: red;">
            <b>{{ error }}</b>
          </p>

          <div class="card card-plain">
            <div class="card-header card-header-primary">
              <h4 class="card-title mt-0">List of {{ type }}</h4>
            </div>
            <h4 class="text-warning" v-if="requests.length === 0" align="center">
              <br />No Properties Available
              <br />
              <br />
            </h4>

            <div v-else class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead class="text-warning">
                    <tr>
                      <th>PropertyName</th>
                      <th>BHK</th>
                      <th>Facility</th>
                      <th>City</th>
                      <th>Rent</th>
                      <th>Owner</th>
                      <th>ContactNo</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(app,index) in requests" :key="index">
                      <td>{{ app.propertyName }}</td>
                      <td>{{ app.bhk }}</td>
                      <td>{{ app.facility }}</td>
                      <td>{{ app.city }}</td>
                      <td>{{ app.rent }}</td>
                      <td>{{ app.table1.userName }}</td>
                      <td>{{ app.table1.contactNo }}</td>
                      <td>{{ app.status }}</td>
                      <td>
                        <button
                          type="submit"
                          class="btn btn-info"
                          @click="details(app.propertyId)"
                        >Details</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content" v-if="status2 === 1">
        <div class="col-md-12">
          <button type="submit" class="btn btn-primary" @click="bunglows()">Bunglows</button>
          <button type="submit" class="btn btn-primary" @click="flats()">Flats</button>
          <button type="submit" class="btn btn-primary" @click="tenaments()">Tenaments</button>
          <button type="submit" class="btn btn-primary" @click="unsold()">UnSold Properties</button>

          <p v-if="error !== ''" style="color: red;">
            <b>{{ error }}</b>
          </p>

          <div class="card card-plain">
            <div class="card-header card-header-primary">
              <h4 class="card-title mt-0">List of {{ type }}</h4>
            </div>
            <h4 class="text-warning" v-if="requests.length === 0" align="center">
              <br />No Properties Available
              <br />
              <br />
            </h4>

            <div v-else class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead class="text-warning">
                    <tr>
                      <th>PropertyName</th>
                      <th>Type</th>
                      <th>BHK</th>
                      <th>Facility</th>
                      <th>City</th>
                      <th>Rent</th>
                      <th>Owner</th>
                      <th>ContactNo</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(app,index) in requests" :key="index">
                      <td>{{ app.propertyName }}</td>
                      <td>{{ app.propertyType }}</td>
                      <td>{{ app.bhk }}</td>
                      <td>{{ app.facility }}</td>
                      <td>{{ app.city }}</td>
                      <td>{{ app.rent }}</td>
                      <td>{{ app.table1.userName }}</td>
                      <td>{{ app.table1.contactNo }}</td>
                      <td>
                        <button
                          type="submit"
                          class="btn btn-info"
                          @click="details(app.propertyId)"
                        >Details</button>
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
import manage from "../../services/admin/manageProperties_service";

export default {
  data() {
    return {
      error: "",
      status: 0,
      type: "",
      requests: [],
      status2: 0
    };
  },
  methods: {
    SignOut() {
      this.$session.destroy();
      this.$router.push("/");
    },
    bunglows() {
      this.status = 1;
      this.status2 = 0;
      this.type = "Bunglows";
      manage
        .getBunglows()
        .then(res => {
          this.requests = res.data;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    details(id) {
      this.$router.push("/properties/" + id);
    },
    unsold() {
      this.status2 = 1;
      this.status = 0;
      this.type = "UnSold Properties";
      manage
        .getUnsold()
        .then(res => {
          this.requests = res.data;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    flats() {
      this.status = 1;
      this.status2 = 0;
      this.type = "Flats";
      manage
        .getFlats()
        .then(res => {
          this.requests = res.data;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    tenaments() {
      this.status = 1;
      this.status2 = 0;
      this.type = "Tenaments";
      manage
        .getTenaments()
        .then(res => {
          this.requests = res.data;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    }
  },
  mounted() {
    if (this.$session.exists() === true) {
      this.bunglows();
    } else {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
