<template>
  <div class="row justify-content-md-center">
    <div class="col-md-auto">
      <div class="card">
        <div class="card-header">{{ header }}</div>
        <div class="card-body">
          <slot></slot>
        </div>
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
}
</style>
