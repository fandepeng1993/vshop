<template>
      <div class="goodsdetail">
        <router-view></router-view>
      </div>
</template>
<script type="text/ecmascript-6">
export default {
  created() {
    console.log(this.$router, this.$route)
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .goodsdetail
    position fixed
    width 100%
    height 100%
    background white
    z-index 2
</style>
