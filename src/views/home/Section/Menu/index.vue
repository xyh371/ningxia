<template>
  <div class="imgs">
    <a href="#"
    v-for="(v, k) in DataList.List"
    :key="k"
    @click="handEcent(`page${k}`)">
      <img src="/static/image/guji@2x.png" alt="" />
      <p>{{v.title}}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Muen',
  props: ['DataList'],
  methods: {
    handEcent (i) {
      this.$router.push(i)
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/static/scss/index.scss'; //绝对路径报错，改成相对路径之后就好了
@import '../../../../../static/scss/index.scss';
.imgs {
  @include wh(100%, auto);
  @include flex;
  @include mt(5px);
  a {
    @include wh(20%, auto);
    @include ta;
    @include mt(35px);
    img {
      @include wh(88px, 88px);
      @include mb(15px);
    }
    p {
      font-family: PingFangSC-Regular;
      @include fz(24px);
      color: #666666;
      line-height: 24px;
    }
  }
}
</style>
