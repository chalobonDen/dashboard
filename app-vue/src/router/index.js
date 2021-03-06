import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueMaterial from 'vue-material'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(Antd)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: 'HomeDashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeDashboard.vue'),
  },
  {
    path: '/news',
    name: 'news',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/news.vue'),
  },
  {
    path: '/projects/',
    name: 'projectPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/projects.vue'),
  },
  {
    path: '/projects/:id',
    name: 'project',
    component: () => import(/* webpackChunkName: "about" */ '../views/project.vue'),
  },
  {
    path: '/taskDetail/:id',
    name: 'taskDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/taskDetail.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue'),
  },
  {
    path: '/forgetpassword',
    name: 'forgetpassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/forgetpassword.vue'),
  },
  {
    path: '/testLogin',
    name: 'testLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/testLogin.vue'),
  },

  {
    path: '/members',
    name: 'members',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/members.vue'),
  },
  {
    path: '/members/:id',
    name: 'profileMember',
    component: () => import(/* webpackChunkName: "about" */ '../views/profileMember.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/profile.vue'),
  },
  {
    path: '/projectDetail',
    name: 'projectDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/projectDetail.vue'),
  },
  {
    path: '/editprofile',
    name: 'editprofile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/editprofile.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
