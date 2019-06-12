import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: "Anoniempje",
      avatar: "./images/avatar.png"
    },
    messages: []
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message)
    },
    setUserName(state, name) {
      state.user.name = name
    }
  }
})
