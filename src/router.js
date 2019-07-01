import Vue from 'vue'
import Router from 'vue-router'
import Channel from './containers/Channel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'general'
    },
    {
      path: '/:channelId',
      name: 'Channel',
      component: Channel,
      props: true
    }
  ]
})
