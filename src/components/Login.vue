<template>
  <base-card v-bind="login">
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
        header: "Login to ",
        body: "body"
      }
    };
  }
};
</script>

<style></style>
