import Vuex from 'vuex'
import Vue from 'vue'
import Api from './api/index.js';

const api = new Api()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: "Anoniempje",
      avatar: "./images/avatar.png"
    },
    messages: [],
    searching: false,
    searchText: ''
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message)
    },
    addMessages(state, messages) {
      state.messages = [...state.messages, ...messages]
    },
    setUserName(state, name) {
      state.user.name = name
    },
    setSearching(state, status) {
      state.searching = status
    },
    setSearchText(state, query) {
      state.searchText = query
    }
  },
  actions: {
    async initChat({ commit }) {
      const { messages } = await api.init()

      commit('addMessages', messages)
    }
  }
})
