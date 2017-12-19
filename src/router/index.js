import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/pages/default'
import Forside from '@/pages/forside'
import Henvendelse from '@/pages/henvendelse'
import Opgave from '@/pages/opgave'
import Rekvisition from '@/pages/rekvisition'
import Indstillinger from '@/pages/indstillinger'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default
    },
    {
      path: '/forside',
      name: 'forside',
      component: Forside
    },
    {
      path: '/henvendelse',
      name: 'henvendelse',
      component: Henvendelse
    },
    {
      path: '/henvendelse/:id',
      name: 'henvendelse',
      component: Henvendelse, 
      params: {
        id: ''
      }
    },
    {
      path: '/opgave/:id',
      name: 'opgave',
      component: Opgave, 
      params: {
        id: ''
      }
    },
    {
      path: '/entreprenoeropgave/:id',
      name: 'rekvisition',
      component: Rekvisition, 
      params: {
        id: ''
      }
    },
    {
      path: '/indstillinger',
      name: 'indstillinger',
      component: Indstillinger
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
