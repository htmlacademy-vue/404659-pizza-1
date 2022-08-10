import pizza from "@/static/pizza.json";
import {
  normalizeDough,
  normalizeSize,
  normalizeSauce,
  normalizeIngredient,
} from "@/common/helpers.js";
import {
  GET_NAME_PIZZA,
  UPDATE_ORDER,
  UPDATE_INGREDIENTS,
} from "../mutation-types.js";

export default {
  namespaced: true,
  state: {
    pizza,
    doughs: normalizeDough(pizza.dough),
    sizes: normalizeSize(pizza.sizes),
    sauces: normalizeSauce(pizza.sauces),
    ingredients: normalizeIngredient(pizza.ingredients),
    order: {
      dough: 2,
      size: 3,
      sauce: 2,
      ingredients: [],
      price: 0,
      pizzaName: "",
    },
  },
  getters: {
    doughs(state) {
      return state.doughs;
    },
    sauces(state) {
      return state.sauces;
    },
    sizes(state) {
      return state.sizes;
    },
    ingredients(state) {
      return state.ingredients;
    },
    currentDoughClass(state) {
      return state.order.dough === 1 ? "small" : "big";
    },
    currentSauceClass(state) {
      return state.order.sauce === 1 ? "tomato" : "creamy";
    },
    currentName(state) {
      return state.order.pizzaName;
    },
    doughPrice(state) {
      if (state.order.dough) {
        const doughPrice = state.doughs.filter(
          (item) => item.id === state.order.dough
        );
        return doughPrice[0].price;
      }

      return 0;
    },
    saucePrice(state) {
      if (state.order.sauce) {
        const saucePrice = state.sauces.filter(
          (item) => item.id === state.order.sauce
        );
        return saucePrice[0].price;
      }

      return 0;
    },
    ingredientPrice(state) {
      if (state.order.ingredients.length > 0) {
        var ingredientsPrices = 0;

        ingredientsPrices = state.order.ingredients
          .map((item) => item.count * item.price)
          .reduce(
            (previousValue, currentValue) => previousValue + currentValue
          );

        return ingredientsPrices;
      }

      return 0;
    },
    sizeMultiplier(state) {
      if (state.order.size) {
        const sizeMultiplier = state.sizes.filter(
          (item) => item.id === state.order.size
        );
        return sizeMultiplier[0].multiplier;
      }

      return 0;
    },
    pizzaPrice(state, getters) {
      return (
        getters.sizeMultiplier *
        (getters.doughPrice + getters.saucePrice + getters.ingredientPrice)
      );
    },
    isDisabledButton(state) {
      return state.order.pizzaName === "" ||
        state.order.ingredients.length === 0
        ? true
        : false;
    },
  },
  mutations: {
    [GET_NAME_PIZZA](state, pizzaName) {
      state.order.pizzaName = pizzaName;
    },
    [UPDATE_ORDER](state, newValues) {
      newValues.filter((newValue) => {
        if (newValue.name === "dough") {
          state.order.dough = newValue.value;
        }
        if (newValue.name === "sauce") {
          state.order.sauce = newValue.value;
        }
        if (newValue.name === "diameter") {
          state.order.size = newValue.value;
        }
      });
    },
    [UPDATE_INGREDIENTS](state, name) {
      state.ingredients.forEach((item) => {
        if (name.buttonName === "minus") {
          if (item.value === name.inputName) {
            item.count -= 1;
          }
        } else {
          if (item.value === name.inputName) {
            item.count += 1;
          }
        }
      });
      state.order.ingredients = state.ingredients.filter(
        (item) => item.count > 0
      );
    },
  },
  actions: {
    [GET_NAME_PIZZA]({ commit }, name) {
      commit(GET_NAME_PIZZA, name);
    },
    [UPDATE_ORDER]({ commit }, newValue) {
      commit(UPDATE_ORDER, newValue);
    },
    [UPDATE_INGREDIENTS]({ commit }, newValue) {
      commit(UPDATE_INGREDIENTS, newValue);
    },
  },
};
