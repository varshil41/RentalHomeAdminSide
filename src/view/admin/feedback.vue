<template>
  <div class="wrapper">
    <adminHeader></adminHeader>

    <div class="main-panel">
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <span class="navbar-brand">Feedbacks</span>
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
          <div class="card card-plain">
            <div class="card-header card-header-primary">
              <h4 class="card-title mt-0">Feedback List</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead class>
                    <tr>
                      <th>UserName</th>
                      <th>ContactNo</th>
                      <th>Type</th>
                      <th>Experience</th>
                      <th>Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(feedback,index) in feedbacks" :key="index">
                      <td>{{ feedback.userName }}</td>
                      <td>{{ feedback.contactNo }}</td>
                      <td>{{ feedback.userType }}</td>
                      <td>{{ feedback.table1.experience }}</td>
                      <td>
                        <textarea rows="1" cols="15">{{ feedback.table1.comment }}</textarea>
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
import manage from "../../services/admin/feedback_service";

export default {
  data() {
    return {
      error: "",
      feedbacks: []
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
        .getFeedbacks()
        .then(res => {
          this.feedbacks = res.data;
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
