<template>
  <div class="posts">
    <h1>Posts</h1>
    <post-list :posts="posts"></post-list>
  </div>
</template>
<script>
import PostList from "@/components/PostList.vue";
export default {
  name: "PostsView",
  components: {
    PostList,
  },
  computed: {
    posts() {
      return this.$store.getters["posts/allPosts"];
    }
  }
};
</script>
<style scoped>
</style>
