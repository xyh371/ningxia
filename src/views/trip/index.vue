<template>
    <div class="Trip">
      <Header />
      <Section :List="List" />
    </div>
</template>

<script>
import Header from './Header'
import Section from './Section'
export default {
  name: 'Trip',
  components: {
    Header,
    Section
  },
  data () {
    return {
      List: [
        {
          type: '姓名',
          title: '请输入联系人姓名'
        },
        {
          type: '证件类型',
          title: '身份证'
        },
        {
          type: '证件',
          title: '请输入证件号'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    .Trip {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      background: #F5F5F5;
    }
</style>
