<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <BuilderSauceSelector />
        <BuilderIngredientSelector />
      </div>
    </div>
  </div>
</template>

<script>
import BuilderSauceSelector from "@/modules/builder/components/BuilderSauceSelector";
import BuilderIngredientSelector from "@/modules/builder/components/BuilderIngredientSelector";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    BuilderSauceSelector,
    BuilderIngredientSelector,
  },
};
</script>
