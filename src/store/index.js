import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openCart: false
  },
  actions: {
    updateOpenCart(context, payload) {
      context.commit("OPENCART", payload);
    }
  },
  mutations: {
    OPENCART(state, payload) {
      state.openCart = payload;
    }
  },
  modules: {}
});
