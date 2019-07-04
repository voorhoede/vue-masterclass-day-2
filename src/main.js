import Vue from 'vue'
import App from './App.vue'
import './main.css'

Vue.config.productionTip = false

window.chat = {
  user: {
    name: "Anoniempje",
    avatar: "./images/avatar.png"
  },
  messages: [],
  searching: false,
  searchText: ''
}

new Vue({
  render: h => h(App),
  data: window.chat,
  watch: {
    newProp() {
      console.log('newProp was added/changed');
    },

    messages(newValue) {
      console.log(`messages changed to ${newValue}`);
    }
  },
  //TODO: add store
}).$mount('#app')
