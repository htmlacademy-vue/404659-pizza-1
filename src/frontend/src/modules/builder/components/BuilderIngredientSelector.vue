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
        <ItemCounter
          :inputName="ingredient.value"
          :counterValue="ingredient.count"
          @updateOrder="$emit('updateOrder', $event)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import SelectorItem from "@/common/components/SelectorItem";
import ItemCounter from "@/common/components/ItemCounter";

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
    ItemCounter,
  },
};
</script>
