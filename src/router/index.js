import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login.vue')
  },

  {
    path: '/home',
    name: 'Home',
    component:() => import('../views/home.vue'),
    children:[{
      path: '/option',
      name: 'option',
      component: () => import('../views/option.vue')
    },

    {
      path: '/optionTwo',
      name: 'optionTwo',
      component: () => import('../views/optionTwo.vue')
    },
    {
      path: '/optionThree',
      name: 'optionThree',
      component: () => import('../views/optionThree.vue')
    },
    {
      path: '/optionFour',
      name: 'optionFour',
      component: () => import('../views/optionFour.vue')
    }]
  }
  

]

const router = new VueRouter({
  
  base: process.env.BASE_URL,
  routes
})

export default router
