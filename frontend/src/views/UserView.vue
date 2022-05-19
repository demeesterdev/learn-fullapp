<template>
  <div class="container">
    <h1>{{ user.userName }}</h1>
    <p>{{ user.description }}</p>
    <post-list :posts="userPosts" title="Last Posts"></post-list>
  </div>
</template>
<script>
import PostList from "@/components/PostList.vue";
export default {
  components: { PostList },
  computed: {
    userPosts() {
      return this.$store.getters["posts/userPosts"](this.user.userName);
    },
    user() {
      return this.$store.getters["users/currentUser"];
    }
  }
};
</script>
