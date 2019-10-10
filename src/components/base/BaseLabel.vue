<template>
  <label :for="id">
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    id: {
      default: "",
      type: String
    }
  }
};
</script>

<style></style>
