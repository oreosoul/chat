import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/page/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: Chat
    }
  ]
})
