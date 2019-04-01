<template>
  <section>
    <div v-for="(i,k) in List" :key="k">
      <p>{{i.type}}</p>
      <input type="text" :placeholder="i.title" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: ['List']
}
</script>

<style lang="scss" scoped>
  section {
    width: 100%;
    height: auto;
    background: #fff;
    div {
      width: 95%;
      height: 50px;
      display: flex;
      align-items: center;
      margin-left: 10px;
      border-bottom: 1px solid #EEEEEE;
      input {
        border: 0;
        flex: 1;
        height: 100%;
        outline:none;
      }
      p {
        width: 25%;
        height: 100%;
        line-height: 50px;
      }
    }
  }
</style>
