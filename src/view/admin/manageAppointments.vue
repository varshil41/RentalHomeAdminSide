  <template>
  <div class="wrapper">
    <adminHeader></adminHeader>

    <div class="main-panel">
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <span class="navbar-brand">Manage Appointments</span>
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
          <button type="submit" class="btn btn-primary" @click="accepted()">Accepted</button>
          <button type="submit" class="btn btn-primary" @click="rejected()">Rejected</button>
          <button type="submit" class="btn btn-primary" @click="pending()">Pending</button>
          <button type="submit" class="btn btn-primary" @click="completed()">Completed</button>
          <button type="submit" class="btn btn-primary" @click="set()">Set Appointment</button>

          <p v-if="error !== ''" style="color: red;">
            <b>{{ error }}</b>
          </p>

          <div class="card card-plain">
            <div class="card-header card-header-primary">
              <h4 class="card-title mt-0">{{ type }} Requests</h4>
            </div>
            <h4 class="text-warning" v-if="requests.length === 0" align="center">
              <br />No Record Available
              <br />
              <br />
            </h4>

            <div v-else class="card-body">
              <div class="table-responsive">
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

      <div class="content" v-if="status3 === 1">
        <div class="col-md-12">
          <button type="submit" class="btn btn-primary" @click="accepted()">Accepted</button>
          <button type="submit" class="btn btn-primary" @click="rejected()">Rejected</button>
          <button type="submit" class="btn btn-primary" @click="pending()">Pending</button>
          <button type="submit" class="btn btn-primary" @click="completed()">Completed</button>
          <button type="submit" class="btn btn-primary" @click="set()">Set Appointment</button>

          <p v-if="error !== ''" style="color: red;">
            <b>{{ error }}</b>
          </p>

          <div class="card card-plain">
            <div class="card-header card-header-primary">
              <h4 class="card-title mt-0">{{ type }} Requests</h4>
            </div>
            <h4 class="text-warning" v-if="requests.length === 0" align="center">
              <br />No Record Available
              <br />
              <br />
            </h4>

            <div v-else class="card-body">
              <div class="table-responsive">
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
                      <th>Action</th>
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
                      <td>
                        <button
                          type="submit"
                          class="btn btn-success"
                          @click="completedApp(app.appointmentReqId)"
                        >Completed</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content" v-if="status1 === 1">
        <div class="col-md-12">
          <button type="submit" class="btn btn-primary" @click="accepted()">Accepted</button>
          <button type="submit" class="btn btn-primary" @click="rejected()">Rejected</button>
          <button type="submit" class="btn btn-primary" @click="pending()">Pending</button>
          <button type="submit" class="btn btn-primary" @click="completed()">Completed</button>
          <button type="submit" class="btn btn-primary" @click="set()">Set Appointment</button>

          <p v-if="error !== ''" style="color: red;">
            <b>{{ error }}</b>
          </p>

          <div class="row" v-if="statusAccept === 1">
            <hr />
            <div class="col-md-5">
              <div class="form-group bmd-form-group">
                <input type="date" class="form-control" placeholder="Enter Date" v-model="date" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group bmd-form-group">
                <input type="text" class="form-control" placeholder="Enter Place" v-model="place" />
              </div>
            </div>

            <button type="submit" class="btn btn-success" @click="setApp()">Set Appointment</button>
          </div>

          <div class="card card-plain">
            <div class="card-header card-header-primary">
              <h4 class="card-title mt-0">{{ type }} Requests</h4>
            </div>
            <h4 class="text-warning" v-if="requests.length === 0" align="center">
              <br />No Record Available
              <br />
              <br />
            </h4>

            <div v-else class="card-body">
              <div class="table-responsive">
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
                      <th>Action</th>
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
                      <td>
                        <button
                          type="submit"
                          class="btn btn-success"
                          @click="acceptReq(app.appointmentReqId,app.table1.userEmail)"
                        >Accept</button>

                        <button
                          type="submit"
                          class="btn btn-danger"
                          @click="rejectReq(app.appointmentReqId,app.table1.userEmail)"
                        >Reject</button>
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
          <button type="submit" class="btn btn-primary" @click="accepted()">Accepted</button>
          <button type="submit" class="btn btn-primary" @click="rejected()">Rejected</button>
          <button type="submit" class="btn btn-primary" @click="pending()">Pending</button>
          <button type="submit" class="btn btn-primary" @click="completed()">Completed</button>
          <button type="submit" class="btn btn-primary" @click="set()">Set Appointment</button>

          <br />

          <hr />
          <p v-if="error !== ''" style="color: red;">
            <b>{{ error }}</b>
          </p>

          <div class="row">
            <div class="col-md-5">
              <div class="form-group bmd-form-group">
                <input type="date" class="form-control" placeholder="Enter Date" v-model="date" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group bmd-form-group">
                <input type="text" class="form-control" placeholder="Enter Place" v-model="place" />
              </div>
            </div>

            <button type="submit" class="btn btn-success" @click="setAppointment()">Set Appointment</button>
          </div>

          <div class="card card-plain">
            <div class="card-header card-header-primary">
              <h4 class="card-title mt-0">Choose Property</h4>
            </div>

            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead class="text-warning">
                    <tr>
                      <th>PropertyName</th>
                      <th>PropertyType</th>
                      <th>BHK</th>
                      <th>Facility</th>
                      <th>AddressLine1</th>
                      <th>AddressLine2</th>
                      <th>Area</th>
                      <th>City</th>
                      <th>PinCode</th>
                      <th>Rent</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(app,index) in props" :key="index">
                      <td>{{ app.propertyName }}</td>
                      <td>{{ app.propertyType }}</td>
                      <td>{{ app.bhk }}</td>
                      <td>{{ app.facility }}</td>
                      <td>{{ app.addressLine1 }}</td>
                      <td>{{ app.addressLine2 }}</td>
                      <td>{{ app.area }}</td>
                      <td>{{ app.city }}</td>
                      <td>{{ app.pincode }}</td>
                      <td>{{ app.rent }}</td>
                      <td>{{ app.status }}</td>
                      <td>
                        <input
                          type="radio"
                          name="propertySelect"
                          :value="app.propertyId"
                          v-model="property"
                        />
                        &nbsp; {{ "Select" }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="card card-plain">
            <div class="card-header card-header-primary">
              <h4 class="card-title mt-0">Choose Client</h4>
            </div>

            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead class="text-warning">
                    <tr>
                      <th>UserName</th>
                      <th>Type</th>
                      <th>ContactNo</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>AddressLine1</th>
                      <th>AddressLine2</th>
                      <th>City</th>
                      <th>PinCode</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(app,index) in users" :key="index">
                      <td>{{ app.userName }}</td>
                      <td v-if="app.userType === 1">{{ "Owner" }}</td>
                      <td v-if="app.userType === 2">{{ "Tenant" }}</td>
                      <td>{{ app.contactNo }}</td>
                      <td>{{ app.userEmail }}</td>
                      <td>{{ app.gender }}</td>
                      <td>{{ app.addressLine1 }}</td>
                      <td>{{ app.addressLine2 }}</td>
                      <td>{{ app.city }}</td>
                      <td>{{ app.pincode }}</td>
                      <td>
                        <input type="radio" name="userSelect" :value="app.userId" v-model="user" />
                        &nbsp; {{ "Select" }}
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
import manage from "../../services/admin/manageAppointments_service";

export default {
  data() {
    return {
      error: "",
      status: 0,
      status1: 0,
      status2: 0,
      status3: 0,
      type: "",
      requests: [],
      props: [],
      users: [],
      property: "",
      user: "",
      date: "",
      place: "",
      statusAccept: 0,
      email: "",
      id: ""
    };
  },
  methods: {
    SignOut() {
      this.$session.destroy();
      this.$router.push("/");
    },
    acceptReq(id1, email1) {
      this.statusAccept = 1;
      this.email = email1;
      this.id = id1;
    },
    rejectReq(id1, email1) {
      const data = {
        id: id1,
        email: email1
      };
      manage
        .rejectReq(data)
        .then(res => {
          this.rejected();
          this.error = "";
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    completedApp(id1) {
      const data = {
        id: id1
      };
      manage
        .completedApp(data)
        .then(res => {
          this.accepted();
          this.error = "";
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    set() {
      this.status2 = 1;
      this.status1 = 0;
      this.status = 0;
      this.status3 = 0;

      manage
        .getProperty()
        .then(res => {
          this.props = res.data;
          this.error = "";
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });

      manage
        .getTenant()
        .then(res => {
          this.users = res.data;
          this.error = "";
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    setAppointment() {
      if (this.date === "") {
        this.error = "please Enter the Date";
      } else if (this.place === "") {
        this.error = "Please enter the place";
      } else if (this.property === "") {
        this.error = "Please Select the Property";
      } else if (this.user === "") {
        this.error = "Please Select the client";
      } else {
        this.status2 = 1;
        this.status1 = 0;
        this.status = 0;
        this.status3 = 0;

        var dateobj = new Date(this.date);
        var date1 = dateobj.toISOString();
        const data = {
          date: date1,
          place: this.place,
          propId: this.property,
          userId: this.user
        };
        manage
          .makeAppEntry(data)
          .then(res => {
            if (res.data.result === 1) {
              this.accepted();
              this.error = "";
            } else {
              this.error = "Error Occured !!!";
            }
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      }
    },
    setApp() {
      if (this.date === "") {
        this.error = "please Enter the Date";
      } else if (this.place === "") {
        this.error = "Please enter the place";
      } else {
        var dateobj = new Date(this.date);
        var date1 = dateobj.toISOString();

        const data = {
          id: this.id,
          email: this.email,

          date: date1,
          place: this.place
        };
        manage
          .acceptReq(data)
          .then(res => {
            if (res.data.result === 1) {
              this.accepted();
              this.error = "";
            } else {
              this.error = "Error Occured !!!";
            }
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      }
    },
    accepted() {
      this.status3 = 1;
      this.status1 = 0;
      this.status2 = 0;
      this.status = 0;
      this.type = "Accepted";
      manage
        .getAcceptedReq()
        .then(res => {
          this.requests = res.data;
          this.error = "";
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    completed() {
      this.status = 1;
      this.status1 = 0;
      this.status2 = 0;
      this.status3 = 0;

      this.type = "Completed";
      manage
        .getCompletedReq()
        .then(res => {
          this.requests = res.data;
          this.error = "";
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    rejected() {
      this.status = 1;
      this.status1 = 0;
      this.status2 = 0;
      this.status3 = 0;

      this.type = "Rejected";
      manage
        .getRejectedReq()
        .then(res => {
          this.requests = res.data;
          this.error = "";
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    pending() {
      this.status = 0;
      this.status1 = 1;
      this.status2 = 0;
      this.status3 = 0;
      this.statusAccept = 0;

      this.type = "Pending";
      manage
        .getPendingReq()
        .then(res => {
          this.requests = res.data;
          this.error = "";
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    }
  },
  mounted() {
    if (this.$session.exists() === true) {
      this.accepted();
    } else {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
