import Vuex from 'vuex'
import Vue from 'vue'
import Api from './api/local.js';

const api = new Api()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: {},
    messages: [],
    searching: false,
    searchText: ''
  },
  getters: {
    messages (state) {
      return state.messages
        .filter(message => message.userId)
        .map(message => {
          message.user = state.users.find(user => user.id === Number(message.userId))
          message.date = new Date(message.date)
          return message
        })
        .sort((a, b) => a.date - b.date)
    },
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message)
    },
    setMessages(state, messages) {
      state.messages = [...state.messages, ...messages]
    },
    setUser(state, user) {
      state.user = user
    },
    setUsers(state, users) {
      state.users = users
    },
    addUser(state, user) {
      state.users.push(user)
    },
    updateUser(state, userData) {
      state.users = state.users.map(user => {
        if (user.id === userData.id) {
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
    //TODO: add action to send a message using the api
    async updateUsername ({ state, commit }, username) {
      const updatedUser = { ...state.user, name: username }
      await api.updateUser(updatedUser)
      commit('updateUser', updatedUser)
    },
    async initChat({ commit, state }) {
      const { messages, users, user} = await api.init()

      commit('setUser', user)
      commit('setUsers', users)
      commit('setMessages', messages)

      api.startStream(({ users = [], messages = [] }) => {
        const existingUsersCount = state.users.length
        const newUsersCount = users.length
        const existingMessagesCount = state.messages.length
        const newMessagesCount = messages.length

        if (existingUsersCount !== newUsersCount) {
          messages.slice(existingUsersCount, newUsersCount).forEach(user => {
            commit('addUser', user)
          })
        }

        users.filter(user => {
          const userInState = state.users.find(u => u.id === user.id)
          return userInState ? userInState.name !== user.name : false
        }).forEach(user => commit('updateUser', user))

        if (existingMessagesCount !== newMessagesCount) {
          messages.slice(existingMessagesCount, newMessagesCount).forEach(message => {
            commit('addMessage', message)
          })
        }
      });
    }
  }
})
