import Vue from "vue";
import Vuex from "vuex";
import modules from "@/store/modules";

Vue.use(Vuex);

const state = () => ({});

const actions = {
  initStore({ dispatch }) {
    dispatch("Auth/initModule");
    dispatch("Cart/initModule");
    dispatch("Builder/initModule");
  },
};

const mutations = {};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules,
});
