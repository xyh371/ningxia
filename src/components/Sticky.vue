<template>
  <div class="sticky-wrap" >
    <div class="wrap-box" :class="{fixed: isFixed}">
      <slot ref="dom"></slot>
    </div>
  </div>
</template>

<script>
import { position } from '@/utils/dom.js'
import jsonp from '@/utils/jsonp.js'
export default {
  name: 'Sticky',
  data () {
    return {
      offsetDocumentTop: 0,
      isFixed: false,
      wrapStyle: {}
    }
  },
  mounted () {
    this.getPage()
    window.addEventListener('scroll', this.scroll, false)
    this.initWrapStyle()
  },
  methods: {
    getPage () {
      jsonp('http://localhost:3000/api/home/page', {
        name: 111
      }).then(res => {
        console.log(res)
      })
    },
    initWrapStyle () {
      const child = this.$children[0].$el
      const height = position(child).height
      this.wrapStyle = {
        height: `${height}px`
      }
    },
    scroll (e) {
      const offsetDocumentTop = position(this.$el).top
      const windowScrollTop = window.scrollY
      if (windowScrollTop >= offsetDocumentTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .sticky-wrap {
    width: 100%;
    .wrap-box {
      width: 100%;
      &.fixed {
        position: fixed;
        top: 0;
        background: #fff;
      }
    }
  }
</style>
