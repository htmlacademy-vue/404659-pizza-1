<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>

    <label
      v-for="sauce in sauces"
      :key="sauce.id"
      class="radio ingredients__input"
    >
      <input
        type="radio"
        name="sauce"
        :value="sauce.value"
        :checked="sauce.checked"
      />
      <span>
        {{ sauce.name }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "BuilderSauceSelector",
  props: {
    sauces: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
