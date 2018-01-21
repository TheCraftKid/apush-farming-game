import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/Shop'
import Leaderboard from '@/components/Leaderboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/start',
      name: 'Start Screen'
    },
    {
      path: '/shop/:item_id',
      name: 'Store',
      component: Shop
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    }
  ]
})
