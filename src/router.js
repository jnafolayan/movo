import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'login',
      path: '/login',
      component: () => import(/* webpackChunkName: login */ './views/Login.vue')
    }
  ]
});

export default router;