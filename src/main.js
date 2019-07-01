import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import './main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  watch: {
    newProp() {
      console.log('newProp was added/changed');
    },
    messages(newValue) {
      console.log(`messages changed to ${newValue}`);
    }
  },
  store,
  router
}).$mount('#app')
