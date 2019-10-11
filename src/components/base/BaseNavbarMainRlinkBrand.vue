<template>
  <router-link class="navbar-brand" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      default: "/",
      type: String
    }
    // class: {
    //   default: "navbar-brand",
    //   type: String
    // }
  }
};
</script>

<style></style>
