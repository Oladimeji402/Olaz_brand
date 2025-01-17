<template>
  <div>
    <NavbarVue />
    <router-view />
  </div>
</template>

<script>
import NavbarVue from './components/NavbarVue.vue';

export default {
  components: {
    NavbarVue,
  },
};
</script>

<style>
/* Global styles */
</style>
