<template>
  <div class="container">
    <h1>{{ user.username }}</h1>
    <p>{{ user.description }}</p>
    <post-list :posts="posts" title="Last Posts"></post-list>
  </div>
</template>
<script>
import PostList from "@/components/PostList.vue";
export default {
  components: { PostList },
  data() {
    return {
      user: {
        username: "demeesterdev",
        description: "This is only a little description",
      },
      posts: [
        {
          id: 1,
          user: "demeesterdev",
          date: "2021-01-19 15:30:30",
          post: "Today I'm feeling sooooo well.",
        },
      ],
    };
  },
};
</script>
