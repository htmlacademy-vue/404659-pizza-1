<template>
  <div class="content__result">
    <p>Итого: {{ pizzaPrice }} ₽</p>
    <button type="button" class="button" :disabled="isDisabledButton">
      Готовьте!
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BuilderPriceCounter",
  computed: {
    ...mapGetters("Builder", ["isDisabledButton", "pizzaPrice"]),
  },
};
</script>
