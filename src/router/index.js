import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Users from '@/views/Users.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', //'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    } //,
    /*{
      path: '/editUser',
      component: editUser
    },*/
  ]
})

export default router
