<script setup>
import Post from "./Post.vue";

defineProps({
  posts: {
    type: Array,
    required: true,
    default: []
  },
  remove: Function,
})

</script>
<template>
  <header class="top">
    <span>Your Posts:</span>
  </header>
  <main class="block">
    <Post v-for="post in posts"
          :key="post.id"
          :id="post.id"
          :author="post.author"
          :timestamp="post.timestamp"
          :content="post.content"
          @remove="remove"
    ></Post>
  </main>
</template>

<style scoped>
.top{
  margin: 20px auto;
  color: #1E95EA;
  text-align: center;
  font-size: x-large;

  display: flex;
  justify-content: center;
  align-items: center;
}
.top span{
  margin-right: 20px;
}
.block{
  max-width: 1500px;
  width: 100%;
  height: 100%;

  padding: 5px 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>