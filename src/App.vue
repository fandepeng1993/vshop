<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
    <isat-tabbar></isat-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
  import IsatTabbar from 'base/tabbar/tabbar'
  export default {
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
    components: {
      IsatTabbar
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  #app
    color $color-baby-text
</style>
