<template>
  <div>
    <NavbarVue />
    <router-view />
  <FooterVue />
  </div>
</template>

<script>
import NavbarVue from './components/NavbarVue.vue';
import FooterVue from './components/FooterVue.vue';

export default {
  components: {
    NavbarVue,
    FooterVue,
  },
};
</script>

<style>
/* Global styles */
</style>
