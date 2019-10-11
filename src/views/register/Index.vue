<template>
  <div>
    <Register />
    <button type="button" v-on:click="ping" class="btn btn-primary">
      Ping
    </button>
  </div>
</template>

<script>
import TestService from "@/services/Testing.js";
import RegisterService from "@/services/Register.js";
export default {
  title: "register",
  data() {
    return {
      callback: {}
    };
  },
  mounted() {},
  methods: {
    register() {
      RegisterService.register(this.data)
        .then(response => {
          this.callback = response.data;
        })
        .catch(error => {
          console.log("There was an error: ", error.response);
        });
    },
    ping() {
      TestService.ping()
        .then(response => {
          this.callback = response.data;
        })
        .catch(error => {
          console.log("There was an error: ", error.response);
        });
    }
  }
};
</script>

<style></style>
