<template>
   <div class="filter-nav">
    <SelectTab>
      <SelectTabPane title="全部城市">aaa</SelectTabPane>
      <SelectTabPane title="全部城市">bbb</SelectTabPane>
      <SelectTabPane title="全部城市">ccc</SelectTabPane>
    </SelectTab>
  </div>
</template>

<script>
import SelectTab from './SelectTab.vue'
import SelectTabPane from './SelectTabPane.vue'
export default {
  name: 'ProductFilter',
  props: ['List'],
  data () {
    return {
      isActive: 0
    }
  },
  components: {
    SelectTab,
    SelectTabPane
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../../../static/scss/index.scss';
  .NavLink {
    @include wh(100%, 100px);
    div {
      @include flex;
      p {
        @include wh(33.3%, 100px);
        @include flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .active {
    span {
      color: #53AB3A
    }
  }
</style>
