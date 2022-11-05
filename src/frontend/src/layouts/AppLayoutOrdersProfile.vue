<template>
  <div>
    <AppLayoutHeader />
    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";

export default {
  name: "AppLayoutOrdersProfile",
  components: {
    AppLayoutHeader,
  },
};
</script>

<style></style>
