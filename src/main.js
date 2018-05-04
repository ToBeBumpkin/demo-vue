// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/MarchActive'
// import router from './router'
import store from './store/MarchActive/'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import store from './store'
import 'normalize.css'

Vue.use(ElementUI);
import './assets/styles/MarchActive/index.less'
// import './assets/styles/index.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
