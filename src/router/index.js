import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Phone from '@/pages/phone/Phone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/phone',
      name: 'Phone',
      component: Phone
    }
  ]
})
