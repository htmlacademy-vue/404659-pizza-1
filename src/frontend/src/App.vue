<template>
  <div id="app">
    <AppLayout :isAuth="isAuth" :pizzaPrice="getPizzaPrice">
      <router-view
        :order="order"
        :doughs="doughs"
        :sauces="sauces"
        :ingredients="ingredients"
        :sizes="sizes"
        :pizzaPrice="getPizzaPrice"
        :isDisabledButton="isDisabledButton"
        @selectDough="changeDough"
        @selectSize="changeSize"
        @selectSauce="changeSauce"
        @selectIngredient="changeIngredient"
        @onDrop="onDrop"
        @getPizzaName="getPizzaName"
      />
    </AppLayout>
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

export default {
  name: "App",
  components: {
    AppLayout,
  },
  data() {
    return {
      isAuth: true,
      doughs: normalizeDough(pizza.dough),
      sizes: normalizeSize(pizza.sizes),
      sauces: normalizeSauce(pizza.sauces),
      ingredients: normalizeIngredient(pizza.ingredients),
      order: {
        dough: 1,
        size: 1,
        sauce: 1,
        ingredients: [],
        price: 0,
        pizzaName: "",
      },
    };
  },
  methods: {
    changeDough(dough) {
      this.order.dough = dough.id;
    },
    changeSize(size) {
      this.order.size = size.id;
    },
    changeSauce(sauce) {
      this.order.sauce = sauce.id;
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
          (item) => item.id === this.order.dough
        );
        return doughPrice[0].price;
      }

      return 0;
    },
    saucePrice() {
      if (this.order.sauce) {
        const saucePrice = this.sauces.filter(
          (item) => item.id === this.order.sauce
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
          (item) => item.id === this.order.size
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
  watch: {
    getPizzaPrice: {
      handler(totalPrice) {
        this.order.price = totalPrice;
      },
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
