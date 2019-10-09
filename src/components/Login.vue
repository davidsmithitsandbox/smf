<template>
  <base-card v-bind="login" v-bind:header="'Welcome to ' + appName">
    <BaseInputEmail v-bind="InputEmail"></BaseInputEmail>
    <BaseButtonSubmit></BaseButtonSubmit>
  </base-card>
</template>

<script>
import { app } from "../mixins/app.js";
export default {
  mixins: [app],
  data: function() {
    return {
      InputEmail: {
        title: "Your email"
      },
      login: {
        body: "body"
      }
    };
  }
};
</script>

<style></style>
