import Vuex from 'vuex'
import Vue from 'vue'
import Api from './api/index.js';

const api = new Api()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: api.getUserId(),
    messages: [],
    searching: false,
    searchText: ''
  },
  getters: {
    messages (state) {
      return state.messages
        .filter(message => message.user)
        .map(message => {
          message.user = state.users.find(user => user._id === (message.user._id || message.user))
          return message
        })
        .sort((a, b) => a.date - b.date)
    },
    currentUser(state) {
      return state.users.find(user => user._id === state.user);
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
    addUser(state, user) {
      state.users.push(user)
    },
    updateUser(state, userData) {
      state.users = state.users.map(user => {
        if (user._id === userData._id) {
          return { ...user, ...userData }
        } else {
          return user
        }
      })
    },
    setSearching(state, status) {
      state.searching = status
    },
    setSearchText(state, query) {
      state.searchText = query
    }
  },
  actions: {
    async updateUsername ({ getters, commit }, username) {
      const updatedUser = { ...getters.currentUser, name: username }
      const user = await api.updateUser(updatedUser)
      commit('updateUser', user)
    },
    async sendMessage({ commit }, message) {
      const data = await api.addMessage(message)
      commit('addMessage', { ...message, _id: data.id })
    },
    async initChat({ commit, state }) {
      const { messages, users } = await api.init()

      commit('setUsers', users)
      commit('setMessages', messages)

      api.startStream(doc => {
        if (doc.type === 'message' && doc.user !== state.user) {
          commit('addMessage', doc)
        } else {
          commit('addUser', doc)
        }
      });
    }
  }
})
