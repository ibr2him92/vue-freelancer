import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import learnPage from '@/components/learnPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/learn',
      name:'learnPage',
      component: learnPage
    }
  ],
  mode: 'history'
})
