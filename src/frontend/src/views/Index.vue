<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <BuilderDoughSelector
          :doughs="doughs"
          :order="order"
          @selectDough="$emit('selectDough', $event)"
        />
        <BuilderSizeSelector
          :sizes="sizes"
          :order="order"
          @selectSize="$emit('selectSize', $event)"
        />
        <BuilderIngredientsSelector
          :sauces="sauces"
          :ingredients="ingredients"
          :order="order"
          @selectSauce="$emit('selectSauce', $event)"
          @selectIngredient="$emit('selectIngredient', $event)"
        />
        <BuilderPizzaContent
          :order="order"
          :pizzaPrice="pizzaPrice"
          :isDisabledButton="isDisabledButton"
          @getPizzaName="$emit('getPizzaName', $event)"
          @onDrop="$emit('onDrop', $event)"
        />
      </div>
    </form>
  </main>
</template>

<script>
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaContent from "@/modules/builder/components/BuilderPizzaContent";

export default {
  name: "Index",
  props: {
    order: {
      type: Object,
      required: true,
    },
    doughs: {
      type: Array,
      default: () => [],
    },
    sauces: {
      type: Array,
      default: () => [],
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
    sizes: {
      type: Array,
      default: () => [],
    },
    pizzaPrice: {
      type: Number,
      required: true,
    },
    isDisabledButton: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaContent,
  },
};
</script>

<style lang="scss"></style>
