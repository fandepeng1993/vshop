<template>
  <div>
    <isat-good-list :datas="datas"></isat-good-list>
  </div>
</template>
<script type="text/ecmascript-6">
  import IsatGoodList from 'base/goodsList/goodsList'
  export default {
    props: {
      datas: {
        type: Boolean,
        default: false
      }
    },
    components: {
      IsatGoodList
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
