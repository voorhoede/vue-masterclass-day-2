import Vue from 'vue'
import App from './App.vue'
import('./main.css')

Vue.config.productionTip = false

window.chat = {
  user: {
    name: "Anoniempje",
    avatar: "./images/avatar.png"
  },
  channels: [{
      name: 'Daily'
    },
    {
      name: 'General'
    }
  ],
  currentChannel: 'Daily',
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

    messages(newValue, oldValue) {
      console.log(`messages changed to ${newValue}`);
    }
  },
}).$mount('#app')
