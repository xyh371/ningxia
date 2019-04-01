<template>
  <div class="select-tab">
    <nav>
      <a href="#"
      v-for="(v, i) in navItems"
      :key="i"
      @click="handClick(i)"
      :class="{'active' : i == isActive }"
      >{{v}}</a>
    </nav>
    <div class="contentTab" v-show="is">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { offset } from '@/utils/dom.js'
export default {
  name: 'SelectTab',
  data () {
    return {
      navItems: [],
      isActive: 0,
      is: false
    }
  },
  methods: {
    initNav () {
      this.navItems = this.$children.map(item => {
        return item.title
      })
    },
    handClick (i, event) {
      console.log(offset(event.target))
      this.isActive = i
      this.isShow = !this.isShow
      this.$children.forEach((item, index) => {
        if (i === index) {
          item.isShow = true
          this.is = true
        } else {
          item.isShow = false
        }
      })
    }
  },
  mounted () {
    this.initNav()
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../../../static/scss/index.scss';
  .select-tab {
    position: relative;
    nav {
      width: 100%;
      height: 88px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      @include bb(1px,#ccc);
    }
    .contentTab {
      width: 100%;
      height: 500px;
      background: rgba(53, 47, 47, 0.451);
      position: absolute;
      top: 88px;
    }
  }
  .active {
    color: red;
  }
</style>
