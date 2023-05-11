import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ElectricStation from '@/views/ElectricChargingStation.vue'
import BoxOfficeList from '@/views/BoxOfficeList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/electric',
    name: 'electric',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component : ElectricStation
  },
  {
    path: '/boxoffice',
    name: 'boxoffice',
    component: BoxOfficeList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
