import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import Documentos from '../views/Documentos.vue'
=======
import Home from '@/views/home/index.vue'
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5

const routes = [
  {
    path: '/',
<<<<<<< HEAD
    name: 'Documentos',
    component: Documentos
=======
    name: 'Home',
    component: Home
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  },
  {
    path: '/documentos',
    name: 'Documentos',
<<<<<<< HEAD
    component: () => import('../views/Documentos.vue')
=======
    component: () => import('@/views/Documentos.vue')
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  },
  {
    path: '/beneficios',
    name: 'Benefícios',
<<<<<<< HEAD
    component: () => import('../views/Beneficios.vue')
=======
    component: () => import('@/views/Beneficios.vue')
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  },
  {
    path: '/equipe',
    name: 'Equipe',
<<<<<<< HEAD
    component: () => import('../views/Equipe.vue')
=======
    component: () => import('@/views/Equipe.vue')
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  },
  {
    path: '/tutoriais',
    name: 'Tutoriais',
<<<<<<< HEAD
    component: () => import('../views/Tutoriais.vue')
=======
    component: () => import('@/views/Tutoriais.vue')
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  },
  {
    path: '/permissoes',
    name: 'Permissões',
<<<<<<< HEAD
    component: () => import('../views/Permissoes.vue')
=======
    component: () => import('@/views/Permissoes.vue')
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  },
  {
    path: '/email',
    name: 'Email',
<<<<<<< HEAD
    component: () => import('../views/Email.vue')
=======
    component: () => import('@/views/Email.vue')
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  },
  {
    path: '/birthday',
    name: 'Birthday',
<<<<<<< HEAD
    component: () => import('../views/Birthday.vue')
=======
    component: () => import('@/views/Birthday.vue')
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
