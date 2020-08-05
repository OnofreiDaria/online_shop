import Vue from 'vue';
import Vuex from 'vuex';

import actions from "@/vuex/actions/actions";
import getters from "@/vuex/getters/getters";
import mutations from "@/vuex/mutations/mutations";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters
});

export default store;
