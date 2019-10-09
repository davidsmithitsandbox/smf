<template>
  <div>
    <label for="exampleInputEmail1">{{ title }}</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
    />
    <!-- <small id="emailHelp" class="form-text text-muted"
      >We'll never share your email with anyone else.</small
    >-->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "Email",
      type: String
    }
  }
};
</script>

<style></style>
