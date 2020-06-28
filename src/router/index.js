import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Works from '@/components/Works'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
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
