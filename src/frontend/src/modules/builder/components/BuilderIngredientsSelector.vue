<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
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

        <div class="ingredients__filling">
          <p>Начинка:</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuilderIngredientsSelector",
  props: {
    sauces: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
