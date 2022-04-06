<template>
  <div>
    <AppLayout />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <BuilderDoughSelector
            :doughs="doughs"
            :selectedDough="selectedDough"
            @selectDough="changeDough"
          />
          <BuilderSizeSelector
            :sizes="sizes"
            :selectedSize="selectedSize"
            @selectSize="changeSize"
          />
          <BuilderIngredientsSelector
            :sauces="sauces"
            :ingredients="ingredients"
            :selectedSauce="selectedSauce"
            @selectSauce="changeSauce"
            @selectIngredient="changeIngredient"
          />
          <BuilderPizzaContent
            :orderName="order.currentName"
            :dough="doughValue"
            :sauce="order.sauce"
            :ingredients="order.ingredients"
            :pizzaPrice="getPizzaPrice"
            :isDisabledButton="isDisabledButton"
            @getPizzaName="getPizzaName"
            @onDrop="onDrop"
          />
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import pizza from "@/static/pizza.json";
import {
  normalizeDough,
  normalizeSize,
  normalizeSauce,
  normalizeIngredient,
} from "@/common/helpers.js";
import { MAX_COUNT_INGREDIENT } from "@/common/constants";
import AppLayout from "@/layouts/AppLayout.vue";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaContent from "@/modules/builder/components/BuilderPizzaContent";

export default {
  data() {
    return {
      doughs: normalizeDough(pizza.dough),
      sizes: normalizeSize(pizza.sizes),
      sauces: normalizeSauce(pizza.sauces),
      ingredients: normalizeIngredient(pizza.ingredients),
      doughValue: "small",
      selectedDough: {
        id: 1,
      },
      selectedSize: {
        id: 1,
      },
      selectedSauce: {
        id: 1,
      },
      order: {
        dough: "light",
        size: "small",
        sauce: "tomato",
        ingredients: [],
        price: 0,
        pizzaName: "",
      },
    };
  },
  methods: {
    changeDough(dough) {
      this.order.dough = dough.value;
      this.doughValue = dough.value === "light" ? "small" : "big";
    },
    changeSize(size) {
      this.order.size = size.value;
    },
    changeSauce(sauce) {
      this.order.sauce = sauce.value;
    },
    changeIngredient(name) {
      this.ingredients.forEach((item) => {
        if (name.buttonName === "minus") {
          if (item.value === name.inputName) {
            item.count -= 1;
          }
        } else {
          if (item.value === name.inputName) {
            item.count += 1;
          }
        }

        this.order.ingredients = this.ingredients.filter(
          (item) => item.count > 0
        );
      });
    },
    getPizzaName(pizzaName) {
      this.order.pizzaName = pizzaName;
    },
    onDrop(ingredient) {
      this.ingredients
        .filter((item) => item.value === ingredient)
        .forEach((item) => {
          if (item.count < MAX_COUNT_INGREDIENT) {
            item.count += 1;

            this.changeIngredient({
              buttonName: "plus",
              name: ingredient,
              count: item.count,
            });
          }
        });
    },
  },
  computed: {
    doughPrice() {
      if (this.order.dough) {
        const doughPrice = this.doughs.filter(
          (item) => item.value === this.order.dough
        );
        return doughPrice[0].price;
      }

      return 0;
    },
    saucePrice() {
      if (this.order.sauce) {
        const saucePrice = this.sauces.filter(
          (item) => item.value === this.order.sauce
        );
        return saucePrice[0].price;
      }

      return 0;
    },
    ingredientPrice() {
      if (this.order.ingredients.length > 0) {
        var ingredientsPrices = 0;

        ingredientsPrices = this.order.ingredients
          .map((item) => item.count * item.price)
          .reduce(
            (previousValue, currentValue) => previousValue + currentValue
          );

        return ingredientsPrices;
      }

      return 0;
    },
    sizeMultiplier() {
      if (this.order.size) {
        const sizeMultiplier = this.sizes.filter(
          (item) => item.value === this.order.size
        );
        return sizeMultiplier[0].multiplier;
      }

      return 0;
    },
    getPizzaPrice() {
      return (
        this.sizeMultiplier *
        (this.doughPrice + this.saucePrice + this.ingredientPrice)
      );
    },
    isDisabledButton() {
      return this.order.pizzaName === "" || this.order.ingredients.length === 0
        ? true
        : false;
    },
  },
  components: {
    AppLayout,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaContent,
  },
};
</script>

<style lang="scss"></style>
