import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/auth/LoginView.vue'
import dashboardAdmin from '../views/admin/dashboardView.vue'
import equiposdAdmin from '../views/admin/equiposView.vue'
import movimientosdAdmin from '../views/admin/movimientosView.vue'
import mantenimientosdAdmin from '../views/admin/mantenimientos.vue'
import inicioSoporteTecnico from '../views/soporteTecnico/inicioView.vue'

const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/admin/dashboard', name: 'dashboard-admin', component: dashboardAdmin },
  { path: '/admin/equipos', name: 'equipos-admin', component: equiposdAdmin },
  { path: '/admin/movimientos', name: 'movimientos-admin', component: movimientosdAdmin },
  { path: '/admin/mantenimientos', name: 'mantenimientos-admin', component: mantenimientosdAdmin },
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
