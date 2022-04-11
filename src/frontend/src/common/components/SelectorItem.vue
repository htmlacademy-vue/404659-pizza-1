<template>
  <span :class="`filling filling--${ingredientValue}`">
    {{ ingredientName }}
  </span>
</template>

<script>
export default {
  name: "SelectorItem",
  props: {
    ingredientValue: {
      type: String,
      required: true,
    },
    ingredientName: {
      type: String,
      required: true,
    },
  },
};
</script>
