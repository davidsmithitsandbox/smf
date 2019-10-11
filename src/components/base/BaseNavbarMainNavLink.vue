<template>
  <ul class="navbar-nav">
    <router-link
      :to="to"
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <li :class="'nav-item ' + [isExactActive && 'active']">
        <a
          :class="'nav-link ' + [isExactActive && 'active']"
          href="href"
          @click="navigate"
        >
          <slot></slot>
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    to: {
      default: "/",
      type: String
    }
  }
};
</script>

<style></style>
