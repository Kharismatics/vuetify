import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import MainApp from '../views/MainApp.vue'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import UserIndex from '../views/users/index.vue'
import UserCreate from '../views/users/create.vue'
import UserEdit from '../views/users/edit.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/', name: 'MainApp', component: MainApp,
    children: [
      { path: '', name: 'home', component: Home, },
      { path: '/about', name: 'about', component: About },
      { path: '/users', component: UserIndex,
        children: [
          // { path: 'create', name: 'users.create', components: { default: UserIndex, dialog: UserCreate } },
          { path: 'create', name: 'users.create', components: { dialog: UserCreate } },
          { path: 'edit', name: 'users.edit', components: { dialog: UserEdit } },
          { path: 'createplat', name: 'users.createplat', component: () => import('../views/users/createplat.vue') },
          { path: 'editplat/:id', name: 'users.editplat', component: () => import('../views/users/editplat.vue') }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
