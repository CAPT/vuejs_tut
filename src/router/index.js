import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Users from '@/views/Users.vue'
import EditUser from '@/views/EditUser.vue'
import DeleteUser from '@/views/DeleteUser.vue'
import AddUser from '@/views/AddUser.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', //'hash',
  linkExactActiveClass: 'active',

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
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditUser
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: DeleteUser
    },
    {
      path: '/add',
      name: 'add',
      component: AddUser
    }
  ]
})

export default router
