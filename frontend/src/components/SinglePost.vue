<template>
  <base-card :expandable="post.comments && post.comments.length > 0">
    <template v-slot:header>
      <h3>{{ postTitle(post) }}</h3>
    </template>
    {{ post.post }}
    <template v-slot:footer>
      <base-card
        v-for="comment in post.comments"
        :key="comment.id"
        :expandable="false"
      >
        <template v-slot:header>
          <h3>{{ postTitle(comment) }}</h3>
        </template>
        {{ comment.post }}
      </base-card>
    </template>
  </base-card>
</template>
<script>
import BaseCard from "@/components/UI/BaseCard.vue";
export default {
  props: ["post"],
  components: { BaseCard },
  methods: {
    postTitle(post) {
      return post.user + "@" + post.date;
    },
  },
};
</script>
