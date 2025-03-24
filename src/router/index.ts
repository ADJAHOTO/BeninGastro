import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },

    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }


    
  ],
})

export default router
