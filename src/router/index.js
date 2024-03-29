import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/charts',
      name: 'charts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChartsView.vue'),
      children: [
        {
          path: 'top-scorer',
          component: () => import('../views/TopScorerView.vue')
        },
        {
          path: 'top-rebounds',
          component: () => import('../views/TopReboundView.vue')
        },
        {
          path: 'top-assists',
          component: () => import('../views/TopAssistView.vue')
        }
      ]
    }
  ]
})

export default router
