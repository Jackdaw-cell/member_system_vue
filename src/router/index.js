import Vue from 'vue'
import VueRouter from 'vue-router'
import memberLevel from '../views/memberLevel.vue'
import memberLevelAdd from '@/views/memberLevelAdd.vue'
import memberLevelCredential from '@/views/memberLevelCredential.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'memberLevel',
    component: memberLevel
  },
  {
    path: '/memberLevelAdd',
    name: 'add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: memberLevelAdd
  },
  {
    path: '/memberLevelCredential',
    name: 'memberLevelCredential',
    component: memberLevelCredential
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
