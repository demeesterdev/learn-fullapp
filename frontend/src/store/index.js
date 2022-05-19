import { createStore } from "vuex";
import postsModule from "./postStore/index.js";
import usersModule from "./userStore/index.js";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    posts: postsModule,
    users: usersModule,
  },
});
