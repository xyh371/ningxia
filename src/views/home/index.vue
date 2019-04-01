<template>
  <div class="wrap">
    <Header />
    <Section />
  </div>
</template>

<script>
import Header from './Header'
import Section from './Section/index.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Section
  }
}
</script>

<style lang="scss" scoped>
</style>
