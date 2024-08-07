import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product.list',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/List.vue')
  },
  {
    path: '/product/create',
    name: 'product.form',
    component: () => import(/* webpackChunkName: "about" */ '../views/products/Form.vue')
  },
  {
    path: '/user',
    name: 'user.list',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/List.vue')
  },
  {
    path: '/user/create',
    name: 'user.form',
    component: () => import(/* webpackChunkName: "about" */ '../views/users/Form.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
