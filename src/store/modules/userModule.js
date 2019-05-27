const state = {
  username: '',
  token: null
};

const mutations = {
  UPDATE_USERNAME(state, payload) {
    state.username = payload;
  },
  UPDATE_TOKEN(state, payload) {
    state.token = payload;
  }
};

const actions = {
  saveUser({ commit }, { username, token }) {
    commit('UPDATE_USERNAME', username);
    commit('UPDATE_TOKEN', token);
  },

  destroyUser({ commit }) {
    commit('UPDATE_USERNAME', '');
    commit('UPDATE_TOKEN', null);
  }
};

const getters = {
  username: state => state.username,
  token: state => state.token
};

const userModule = {
  state,
  mutations,
  actions,
  getters
};

export default userModule;