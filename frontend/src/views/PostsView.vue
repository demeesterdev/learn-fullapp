<template>
  <div class="posts">
    <h1>Posts</h1>
    <add-text-form
      textRequest="Add Post"
      v-if="loggedIn"
      :showLabel="true"
      @text-added="addPost"
    ></add-text-form>
    <post-list :posts="posts"></post-list>
  </div>
</template>
<script>

import { mapGetters } from "vuex";
import PostList from "@/components/PostList.vue";
import AddTextForm from "@/components/AddTextForm.vue"
export default {
  name: "PostsView",
  components: {
    PostList,
    AddTextForm
  },
  computed: {
    ...mapGetters({loggedIn: "auth/isLoggedIn",currentUser: "auth/currentUser"}),
    posts() {
      return this.$store.getters["posts/allPosts"];
    }
  },
  methods: {
    addPost(text) {
      this.$store.dispatch("posts/addPost", {
        user: this.currentUser.userName,
        post: text
      })
    }
  }
};
</script>
<style scoped>
</style>
