import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FlotteView from '../views/FlotteView.vue'
import KontaktView from '../views/ContactView.vue'
import LoginView from '../views/LoginView.vue'
import AnmeldenView from '../views/AnmeldenView.vue'
import PasswordView from '../views/PasswordForgot.vue'
import Newsletter from '../views/NewsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/flotte',
    name: 'Flotteview',
    component: FlotteView
  },
  {
    path: '/kontakt',
    name: 'KontaktView',
    component: KontaktView
  },
  {
    path: '/Login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/Register',
    name: 'RegisterView',
    component: AnmeldenView
  },
  {
    path: '/Passwordfor',
    name: 'PasswordView',
    component: PasswordView
  },
  {
    path: '/Newsletter',
    name: 'Newsletter',
    component: Newsletter
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
