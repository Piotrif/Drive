import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Enquiry from '@/pages/enquiry'
import Task from '@/pages/task'
import Requisition from '@/pages/requisition'
import Settings from '@/pages/settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/forside',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/henvendelse',
      name: 'enquiry',
      component: Enquiry
    },
    {
      path: '/henvendelse/:id',
      name: 'enquiry',
      component: Enquiry, 
      params: {
        id: ''
      }
    },
    {
      path: '/opgave',
      name: 'task',
      component: Task
    },
    {
      path: '/opgave/:id',
      name: 'task',
      component: Task, 
      params: {
        id: ''
      }
    },
    {
      path: '/entreprenoeropgave/:id',
      name: 'requisition',
      component: Requisition, 
      params: {
        id: ''
      }
    },
    {
      path: '/indstillinger',
      name: 'settings',
      component: Settings
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
