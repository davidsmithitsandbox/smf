<template>
  <div class="button-wrapper">
    <button type="button" class="btn btn-primary float-right">
      <slot>Submit</slot>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button-wrapper {
  padding-top: 0.5em;
}
</style>
