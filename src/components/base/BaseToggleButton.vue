<template>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    :data-target="'#' + dataTarget"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <BaseTogglerIcon></BaseTogglerIcon>
  </button>
</template>

<script>
export default {
  props: {
    dataTarget: {
      default: "navbarNav",
      type: String
    }
  }
};
</script>

<style></style>
