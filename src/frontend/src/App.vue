<template>
  <div id="app">
    <AppLayout :isAuth="isAuth">
      <router-view />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";

export default {
  name: "App",
  components: {
    AppLayout,
  },
  data() {
    return {
      isAuth: false,
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
