import { createRouter, createWebHistory } from 'vue-router'
import Documentos from '../views/Documentos.vue'

const routes = [
  {
    path: '/',
    name: 'Documentos',
    component: Documentos
  },
  {
    path: '/documentos',
    name: 'Documentos',
    component: () => import('../views/Documentos.vue')
  },
  {
    path: '/beneficios',
    name: 'Benefícios',
    component: () => import('../views/Beneficios.vue')
  },
  {
    path: '/equipe',
    name: 'Equipe',
    component: () => import('../views/Equipe.vue')
  },
  {
    path: '/tutoriais',
    name: 'Tutoriais',
    component: () => import('../views/Tutoriais.vue')
  },
  {
    path: '/permissoes',
    name: 'Permissões',
    component: () => import('../views/Permissoes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
