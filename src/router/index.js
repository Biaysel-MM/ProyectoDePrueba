import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/auth/LoginView.vue'
import dashboardAdmin from '../views/admin/dashboardView.vue'
import inicioSoporteTecnico from '../views/soporteTecnico/inicioView.vue'

const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/dashboard', name: 'dashboard-admin', component: dashboardAdmin },
  { path: '/inicio', name: 'inicio-soporte', component: inicioSoporteTecnico },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/404/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
