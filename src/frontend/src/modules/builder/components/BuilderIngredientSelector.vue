<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>
    <ul class="ingredients__list">
      <li
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <AppDrag
          :transferData="ingredient.value"
          :isDraggable="ingredient.count < MAX_COUNT_INGREDIENT"
        >
          <SelectorItem
            :ingredientValue="ingredient.value"
            :ingredientName="ingredient.name"
          />
        </AppDrag>
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
import AppDrag from "@/common/components/AppDrag";
import { MAX_COUNT_INGREDIENT } from "@/common/constants";

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
    AppDrag,
  },
  data() {
    return {
      MAX_COUNT_INGREDIENT,
    };
  },
};
</script>
