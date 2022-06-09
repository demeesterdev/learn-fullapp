import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue";
import LoginView from "../views/LoginView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Posts",
    component: PostsView,
  },
  {
    path: "/user/:userId",
    name: "User",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/UserView.vue"),
    props: true,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/isLoggedIn"]) {
        next({ name: "Login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/isLoggedIn"]) {
        next({ name: "Posts" });
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
