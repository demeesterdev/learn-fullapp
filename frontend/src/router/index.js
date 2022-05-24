import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '../views/PostsView.vue'
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: PostsView
  },
  {
    path: '/user/:userId',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user" */ '../views/UserView.vue'),
    props: true
  },
  {
    path: "/login",   
    name: "Login",    
    component: LoginView
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
