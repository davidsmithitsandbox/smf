<template>
  <baseFormGroup>
    <baseLabel v-if="label" :for="id">{{ label }}</baseLabel>
    <input
      :name="name"
      type="email"
      class="form-control"
      :id="id"
      aria-describedby="emailHelp"
      :placeholder="placeholder"
    />
  </baseFormGroup>
</template>

<script>
import { mixinInputEmail } from "./../../mixins/mixinInputEmail.js";
export default {
  mixins: [mixinInputEmail],
  props: {
    name: {
      default: "email",
      type: String
    },
    label: {
      default: "",
      type: String
    }
  }
};
</script>

<style></style>
