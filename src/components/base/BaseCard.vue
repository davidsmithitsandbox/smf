<template>
  <div class="row justify-content-md-center">
    <div class="col-md-auto">
      <div class="card">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      default: "",
      type: String
    },
    body: {
      default: "",
      type: String
    }
  }
};
</script>

<style scoped>
.row,
.justify-content-md-center .col-md-auto {
  padding: 0;
  padding-top: 0.5em;
}
.card-header {
  background-color: white;
  border: none;
}
</style>
