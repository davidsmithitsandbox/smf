<template>
  <div>
    <h4>{{ event.welcome_message }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        welcome_message: "Welcome, "
      }
    };
  }
};
</script>

<style></style>
