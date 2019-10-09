<template>
  <div>
    <h1 v-text="welcome"></h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      welcome: "Welcome, " + this.username
    };
  },
  props: ["username"]
};
</script>

<style></style>
