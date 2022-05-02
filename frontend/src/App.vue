<template>
  <the-application-bar></the-application-bar>
  <router-view class="content" />
</template>

<script>
import TheApplicationBar from './components/UI/TheApplicationBar.vue'
export default {
  components: { TheApplicationBar }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.content {
  padding-top: 5.5vh;
  padding-left: 10%;
}
</style>
