import http from '../../http';

const state = {
  movies: []
};

const mutations = {
  UPDATE_MOVIES(state, payload) {
    state.movies = payload;
  }
};

const actions = {
  getMovies({ commit }) {
    http.get('movies')
      .then(updateMovies);

    function updateMovies({ data }) {
      commit('UPDATE_MOVIES', data);
    }
  }
};

const getters = {
  movies: state => state.movies;
};

const movieModule = {
  state,
  mutations,
  actions,
  getters
};

export default movieModule;