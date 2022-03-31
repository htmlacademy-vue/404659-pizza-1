<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>
    <ul class="ingredients__list">
      <li
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <SelectorItem
          :ingredientValue="ingredient.value"
          :ingredientName="ingredient.name"
        />
        <div class="counter counter--orange ingredients__counter">
          <button
            type="button"
            class="counter__button counter__button--minus"
            disabled
          >
            <span class="visually-hidden">Меньше</span>
          </button>
          <input type="text" name="counter" class="counter__input" value="0" />
          <button type="button" class="counter__button counter__button--plus">
            <span class="visually-hidden">Больше</span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SelectorItem from "@/common/components/SelectorItem";

export default {
  name: "BuilderIngredientSelector",
  props: {
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    SelectorItem,
  },
};
</script>
