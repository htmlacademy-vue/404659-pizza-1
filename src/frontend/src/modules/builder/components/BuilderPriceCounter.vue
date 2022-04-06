<template>
  <div class="content__result">
    <p>Итого: {{ pizzaPrice }} ₽</p>
    <button type="button" class="button" :disabled="isDisabledButton">
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: "BuilderPriceCounter",
  props: {
    pizzaPrice: {
      type: Number,
      required: true,
    },
    isDisabledButton: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
