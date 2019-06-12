import Vue from 'vue'
import store from './store'
import App from './App.vue'
import './main.css'

Vue.config.productionTip = false

window.chat = {
  channels: [{
      name: 'Daily'
    },
    {
      name: 'General'
    }
  ],
  currentChannel: 'Daily',
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
  store
}).$mount('#app')
