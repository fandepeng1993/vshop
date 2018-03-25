<template>
  <div class="homepage">
    <isat-searchbox></isat-searchbox>
    <isat-conhomepage></isat-conhomepage>
  </div>
</template>
<script type="text/ecmascript-6">
  import IsatSearchbox from 'components/searchbox/searchbox'
  import IsatConhomepage from 'components/conhomepage/conhomepage'
  export default {
    activated(){
    },
    components: {
      IsatSearchbox,
      IsatConhomepage
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .homepage
    position: fixed
    width: 100%
    overflow: hidden
    top: 0px
    bottom 55px


</style>
