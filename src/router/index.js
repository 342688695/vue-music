import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'
import Rank from '@/components/rank/rank'
import Search from '@/components/search/search'
import SingerDetail from '@/components/singer-detail/singer-detail'
import disc from '@/components/disc/disc'
import TopList from '@/components/top-list/top-list'
import UserCenter from '@/components/user-center/user-center'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: disc
        }
      ]
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }]
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    },
    {
      path: '/user',
      name: 'user',
      component: UserCenter
    }
  ]
})
