import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/documentos',
    name: 'Documentos',
    component: () => import('@/views/Document.vue')
  },
  {
    path: '/beneficios',
    name: 'Benefícios',
    component: () => import('@/views/Benefit.vue')
  },
  {
    path: '/equipe',
    name: 'Equipe',
    component: () => import('@/views/team/index.vue')
  },
  {
    path: '/tutoriais',
    name: 'Tutoriais',
    component: () => import('@/views/Tutorial.vue')
  },
  {
    path: '/permissoes',
    name: 'Permissões',
    component: () => import('@/views/Permition.vue')
  },
  {
    path: '/email',
    name: 'Email',
    component: () => import('@/views/Email.vue')
  },
  {
    path: '/birthday',
    name: 'Birthday',
    component: () => import('@/views/Birthday.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
