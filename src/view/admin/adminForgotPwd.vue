<template>
  <div class="body1">
    <br />
    <section class="main-log-section">
      <header>
        <h2 style="text-align: center; color: white;">Forgot your Password ?</h2>
      </header>
      <br />
      <label for="uname" style="margin-left: 24px; color: white;">
        <b>&nbsp;Email Address</b>
      </label>

      <input
        class="login-input"
        type="text"
        placeholder="Enter your email address"
        v-model="email"
        name="uname"
        required
      />
      <br />
      <br />
      <p v-if="error !== ''" style="color: white;" align="center">
        <b>{{ error }}</b>
      </p>

      <button type="submit" class="button-log" @click="sendMail()">send</button>

      <span class="psws" style="color: white;">
        <a href="/">Back</a>
      </span>
    </section>
  </div>
</template>

<script>
import manage from "../../services/admin/signin_service";
export default {
  data() {
    return {
      error: "",
      email: ""
    };
  },
  methods: {
    sendMail() {
      if (this.email === "") {
        this.error = "Please enter the emailAddress";
      } else {
        const data = {
          email: this.email
        };
        manage
          .forgotPwd(data)
          .then(res => {
            if (res.data.result === -1) {
              this.error = "Please enter your registered Email Address";
            } else {
              alert("Email Has been sent!!!");
              this.$router.push("/");
            }
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      }
    }
  }
};
</script>

<style scoped>
.body1 {
  background-image: url("../../assets/img/img5.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

@media only screen and (max-width: 700px) {
  .main-log-section {
    height: 50%;
    width: 300px;
  }
}
</style>
