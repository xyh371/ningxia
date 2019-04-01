<template>
  <header>
    <p>取消</p>
    <h2>新增出行人</h2>
    <p>完成</p>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 44px;
    background: #53AB3A;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    font-weight: normal;
    h2 {
        font-size: 16px;
    }
  }
</style>
