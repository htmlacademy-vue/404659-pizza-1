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
          <ul class="ingredients__list">
            <li
              v-for="ingredient in ingredients"
              :key="ingredient.id"
              class="ingredients__item"
            >
              <span :class="`filling filling--${ingredient.value}`">
                {{ ingredient.name }}
              </span>
              <div class="counter counter--orange ingredients__counter">
                <button
                  type="button"
                  class="counter__button counter__button--minus"
                  disabled
                >
                  <span class="visually-hidden">Меньше</span>
                </button>
                <input
                  type="text"
                  name="counter"
                  class="counter__input"
                  value="0"
                />
                <button
                  type="button"
                  class="counter__button counter__button--plus"
                >
                  <span class="visually-hidden">Больше</span>
                </button>
              </div>
            </li>
          </ul>
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
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
