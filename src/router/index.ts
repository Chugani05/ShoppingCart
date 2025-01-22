import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '@/views/ShopView.vue'
import CartView from '@/views/CartView.vue'

const routes = [
  { path: '/', redirect: '/shop' },
  { path: '/shop', name: 'shop', component: ShopView },
  { path: '/cart', name: 'cart', component: CartView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
