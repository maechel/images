import qs from 'qs';
import api from '../../api/imgur';

const state = {
    token: window.localStorage.getItem('imgur_token')
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
    login: () => {
        api.login();
    },

    finalizeLogin({ commit }, hash) {
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token', query.access_token);
    },

    logout: ({ commit }) => {
        commit('setToken', null);
    }

};

export default {
    state,
    getters,
    mutations,
    actions
}