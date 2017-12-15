import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/pages/default'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
