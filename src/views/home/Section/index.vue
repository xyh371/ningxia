<template>
  <div class="section">
    <WheelPlanting />
    <Menu :DataList= {List} />
    <ScrollTop />
  </div>
</template>

<script>
import WheelPlanting from './WheelPlanting/index.vue'
import Menu from './Menu/index.vue'
import ScrollTop from './ScrollTop/index.vue'

export default {
  name: 'Section',
  components: {
    WheelPlanting,
    Menu,
    ScrollTop
  },
  data () {
    return {
      List: [{
        img: '',
        title: '人文古迹'
      },
      {
        img: '',
        title: '人文古迹'
      },
      {
        img: '',
        title: '人文古迹'
      },
      {
        img: '',
        title: '人文古迹'
      },
      {
        img: '',
        title: '人文古迹'
      },
      {
        img: '',
        title: '人文古迹'
      },
      {
        img: '',
        title: '人文古迹'
      },
      {
        img: '',
        title: '人文古迹'
      },
      {
        img: '',
        title: '人文古迹'
      },
      {
        img: '',
        title: '人文古迹'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
