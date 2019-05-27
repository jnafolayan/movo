import Vue from 'vue';

import router from './router';
import store from './store';
import http from './http';

import App from './App.vue';

import './assets/fonts/linearicons/linearicons.css';

Vue.config.productionTip = false;

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');