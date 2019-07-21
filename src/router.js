import Vue from 'vue'
import Router from 'vue-router'
// TODO: uncomment the next line
// import Channel from './components/channel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'general'
    },
    // TODO: add route for channels using a dynamic segment
  ]
})
