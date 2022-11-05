<template>
  <div class="content__result">
    <p>Итого: {{ pizzaPrice }} ₽</p>
    <button
      type="button"
      class="button"
      :disabled="isDisabledButton"
      @click.prevent="pushOrder"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BuilderPriceCounter",
  methods: {
    ...mapActions("Cart", ["updateCart"]),
    pushOrder() {
      this.updateCart();
    },
  },
  computed: {
    ...mapGetters("Builder", ["isDisabledButton", "pizzaPrice"]),
  },
};
</script>
