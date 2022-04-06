<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <BuilderSauceSelector
          :sauces="sauces"
          :selectedSauce="selectedSauce"
          @updateOrder="$emit('selectSauce', $event)"
        />
        <BuilderIngredientSelector
          :ingredients="ingredients"
          @updateOrder="$emit('selectIngredient', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BuilderSauceSelector from "@/modules/builder/components/BuilderSauceSelector";
import BuilderIngredientSelector from "@/modules/builder/components/BuilderIngredientSelector";

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
    selectedSauce: {
      type: Object,
      required: true,
    },
  },
  components: {
    BuilderSauceSelector,
    BuilderIngredientSelector,
  },
};
</script>
