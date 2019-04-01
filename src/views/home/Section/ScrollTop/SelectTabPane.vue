<template>
  <div v-show="isShow" class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SelectTabPane',
  props: {
    title: String
  },
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    background: #fff;
  }
</style>
