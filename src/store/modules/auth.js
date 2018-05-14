const state = {
    token: null
};

const getters = {
    isLoggedIn: state => !!state.token

};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
    }
};

export {
    state,
    getters,
    mutations,
    actions
}