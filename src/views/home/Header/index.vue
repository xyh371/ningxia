<template>
  <header>
    <p>{{name}}</p>
    <h2>宁夏景点门票</h2>
    <p class="hide">{{name}}</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      name: '<'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../../static/scss/index.scss';
  header {
    @include wh(100%, 88px);
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    box-sizing: border-box;
    background: #53AB3A 100%;
    color: #fff;
    p {
        @include fz(43px);
        font-family: '楷体';
    }
    h2 {
      @include fz(34px);
      font-weight: 100;
    }
    .hide {
      color:  #53AB3A;
    }
  }
</style>
