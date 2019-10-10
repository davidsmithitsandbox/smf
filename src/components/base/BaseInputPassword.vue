<template>
  <baseFormGroup>
    <baseLabel v-if="label" :for="id">{{ label }}</baseLabel>
    <input
      :name="name"
      type="password"
      class="form-control"
      :id="id"
      aria-describedby="passwordHelp"
      :placeholder="placeholder"
    />
  </baseFormGroup>
</template>

<script>
export default {
  props: {
    name: {
      default: "",
      type: String
    },
    label: {
      default: "",
      type: String
    },
    placeholder: {
      default: "Password",
      type: String
    },
    id: {
      default: "password"
    }
  }
};
</script>

<style></style>
