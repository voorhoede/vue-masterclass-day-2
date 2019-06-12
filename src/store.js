import Vuex from 'vuex'
import Vue from 'vue'
import Api from './api/index.js';

const api = new Api()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: {
      name: "Anoniempje",
      avatar: "./images/avatar.png"
    },
    messages: [],
    searching: false,
    searchText: ''
  },
  getters: {
    messages (state) {
      return state.messages.map(message => {
        const user = state.users.find(user => user._id === message.user)
        message.user = user
        return message
      })
    }
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message)
    },
    setMessages(state, messages) {
      state.messages = [...state.messages, ...messages]
    },
    setUsers(state, users) {
      state.users = users
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
      const { messages, users } = await api.init()

      commit('setUsers', users)
      commit('setMessages', messages)
    }
  }
})
