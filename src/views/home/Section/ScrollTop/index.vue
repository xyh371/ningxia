<template>
  <div class="ScrollTop">
    <div class="Line">
    </div>
    <Sticky :top="0">
      <ProductFilter />
    </Sticky>
    <DataList :data="data" :List="List" />
  </div>
</template>

<script>
import ProductFilter from './ProductFilter.vue'
import DataList from './DataList.vue'
import { data } from '../../../../mock/mock.js'
import Sticky from '@/components/Sticky.vue'
export default {
  name: 'ScrollTop',
  components: {
    ProductFilter,
    DataList,
    Sticky
  },
  data () {
    return {
      data: data[0],
      List: data[1]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../../../static/scss/index.scss';
  .ScrollTop {
    @include wh(100%, auto);
    .Line {
      @include wh(100%, 20px);
      background: #F5F5F5;
      @include mt(2.8%);
    }
  }
</style>
