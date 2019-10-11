<template>
  <BaseNavbarMainNav>
    <BaseNavbarMainRlinkBrand>{{ brandName }}</BaseNavbarMainRlinkBrand>
    <BaseToggleButton :data-target="toggleTarget"></BaseToggleButton>

    <div class="collapse navbar-collapse" :id="toggleTarget">
      <BaseNavbarMainNavLink :to="'/'">Home</BaseNavbarMainNavLink>
      <BaseNavbarMainNavLink :to="'/login'" :class="'ml-auto'"
        >Login</BaseNavbarMainNavLink
      >
    </div>
  </BaseNavbarMainNav>
</template>

<script>
export default {
  data() {
    return {
      LogoContent: "Logos",
      toggleTarget: "navbarNav"
    };
  }
};
</script>
<style scoped>
.navbar-link-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
