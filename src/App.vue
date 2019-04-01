<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from './views/home/index.vue'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import url('./assets/css/style.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
