import {createRouter, createWebHashHistory} from 'vue-router' 
import LoginPage from '../pages/LoginPage/LoginPage.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import DisciplinasPage from '../pages/DisciplinasPage/DisciplinasPage.vue'
import CalendarioPage from '../pages/CalendarioPage/CalendarioPage.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    meta: {requireAuth: true}
  },  
  {
    path: '/disciplinas',
    name: 'Disciplinas',
    component: DisciplinasPage,
    meta: {requireAuth: true}
  },
  {
    path: '/calendario',
    name: 'Calendario',
    component: CalendarioPage,
    meta: {requireAuth: true}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router
