import Vue from 'vue'
import Router from 'vue-router'
import Channel from './containers/channel'

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
