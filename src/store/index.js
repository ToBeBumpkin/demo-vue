import Vue from 'vue';
import Vuex from 'vuex';
import MarchActive from './MarchActive/';
import RegString from './RegString';
// import state from './state';
// import mutations from './mutations';
// import * as actions from './actions';
// import * as getters from './getters';
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    MarchActive,
    // RegString
  }
});
