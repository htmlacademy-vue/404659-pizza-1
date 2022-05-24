<template>
  <div>
    <AppLayoutHeader :isAuth="isAuth" :pizzaPrice="pizzaPrice" />
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
  props: {
    isAuth: {
      type: Boolean,
      required: true,
      default: false,
    },
    pizzaPrice: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style></style>
