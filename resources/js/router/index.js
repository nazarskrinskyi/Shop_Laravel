import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/main/Index.vue')
    },
    {
      path: '/products',
      name: 'product.index',
      component: () => import('../views/product/Index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products/:id',
      name: 'product.show',
      component: () => import('../views/product/show.vue')
    },
  ]
})

export default router
