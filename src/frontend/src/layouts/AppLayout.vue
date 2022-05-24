<template>
  <component :is="layout" :isAuth="isAuth" :pizzaPrice="pizzaPrice">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "AppLayoutDefault";

export default {
  name: "AppLayout",

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
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
