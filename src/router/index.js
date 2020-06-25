import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Works from '@/components/Works'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: About
    },
    {
      path: '/works',
      component: Works
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
