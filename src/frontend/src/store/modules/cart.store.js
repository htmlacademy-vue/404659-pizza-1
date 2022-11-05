import { ADD_TO_CART } from "../mutation-types.js";

export default {
  namespaced: true,
  state: {
    orders: [],
  },
  getters: {
    orders(state) {
      return state.orders;
    },
    totalCartPrice(state) {
      if (state.orders.length == 0) return 0;

      const totalPizzasPrice = state.orders.reduce((acc, item) => {
        return acc + item.totalPrice;
      }, 0);

      return totalPizzasPrice;
    },
  },
  mutations: {
    [ADD_TO_CART](state, order) {
      state.orders.push(order);
    },
  },
  actions: {
    updateCart({ rootGetters, commit }) {
      commit(ADD_TO_CART, {
        dough: rootGetters["Builder/currentDough"],
        size: rootGetters["Builder/currentSize"],
        sauce: rootGetters["Builder/currentSauce"],
        ingredients: rootGetters["Builder/currentIngredients"],
        name: rootGetters["Builder/currentName"],
        totalPrice: rootGetters["Builder/pizzaPrice"],
      });
    },
  },
};
