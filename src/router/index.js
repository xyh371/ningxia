import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/index'
import Trip from '../views/trip/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home
    }, {
      path: 'page0',
      component: Trip
    }
  ]
})
