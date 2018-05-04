import Vue from 'vue';
import Vuex from 'vuex';
// import user from './user';
import user from './user';
import RegString from '../RegString'
// import user from './user';
// import state from './state';
// import mutations from './mutations';
// import * as actions from './actions';
// import * as getters from './getters';
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    user,
    RegString
  }
});
