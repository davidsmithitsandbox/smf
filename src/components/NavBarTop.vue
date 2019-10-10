<template>
  <nav id="nav-bar-top" class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">{{ appName }}</router-link>
    <!-- <a class="navbar-brand" href="/">Melody</a> -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link
          to="/"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <li :class="'nav-item ' + [isExactActive && 'active']">
            <a
              :class="'nav-link ' + [isExactActive && 'active']"
              href="href"
              @click="navigate"
              >Home</a
            >
          </li>
        </router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        <router-link
          to="/login"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <li :class="'nav-item ' + [isExactActive && 'active']">
            <a
              :class="'nav-link ' + [isExactActive && 'active']"
              href="href"
              @click="navigate"
              >Login</a
            >
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      LogoContent: "Logos"
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
