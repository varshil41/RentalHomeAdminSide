<template>
  <div class="body1">
    <br />
    <section class="main-log-section">
      <header>
        <h1 style="text-align: center; color: white;">SignIn</h1>
      </header>

      <label for="uname" style="margin-left: 24px; color: white;">
        <b>&nbsp;UserEmail</b>
      </label>

      <input
        class="login-input"
        v-model="uname"
        type="text"
        placeholder="Enter Email Address"
        name="uname"
        required
        autocomplete="off"
      />

      <label for="pwd" style="margin-left: 24px; color: white;">
        <b>&nbsp;Password</b>
      </label>

      <input
        type="password"
        class="login-input"
        v-model="pwd"
        placeholder="Enter Password"
        name="psw"
        required
      />
      <br />
      <br />
      <p v-if="error !== ''" style="color: white;" align="center">
        <b>{{ error }}</b>
      </p>

      <button type="submit" class="button-log" @click="signin()">Login</button>

      <span class="psws" style="color: white;">
        Forgot
        <a href="/forgotpwd">password ?</a>
      </span>
    </section>
  </div>
</template>

<script>
import userSignin from "../../services/admin/signin_service";

export default {
  data() {
    return {
      uname: "",
      pwd: "",
      error: ""
    };
  },
  methods: {
    signin() {
      if (this.uname === "") {
        this.error = "Please enter you EmailAddress";
      } else if (this.pwd === "") {
        this.error = "Please enter your password";
      } else {
        const data = {
          email: this.uname,
          pwd: this.pwd
        };
        userSignin
          .sin(data)
          .then(res => {
            if (res.data.result === -1) {
              this.error = "Invalid Email or Password";
            } else {
              this.$session.start();
              this.$session.set("email", this.uname);
              this.$router.push("/home");
            }
          })
          .catch(err => {
            this.error = "Something Went Wrong Please try again Later!!!";
          });
      }
    }
  },
  mounted() {}
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
