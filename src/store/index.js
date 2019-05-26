import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/userModule';
import movie from './modules/movieModule';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    movie
  }
});

export default store;