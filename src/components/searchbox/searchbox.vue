<template>
  <div class="searchtopbox">
    <isat-search></isat-search>
    <isat-person></isat-person>
  </div>
</template>
<script type="text/ecmascript-6">
  import IsatSearch from 'base/search/search'
  import IsatPerson from 'base/person/person'
  export default {
    components: {
      IsatSearch,
      IsatPerson
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .searchtopbox
    background-color $color-header-bg
    overflow hidden


</style>
