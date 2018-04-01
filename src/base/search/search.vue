<template>
  <div class="search">
    <input ref="query" class="box" v-model="searchVal" :placeholder="placeholder"/>
    <i class="icon-dismiss" @click="clear" v-show="searchVal"></i>
    <i class="icon-search" @click="jumppage"></i>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  export default {
    data () {
      return {
        placeholder: '搜索商品',
        searchVal: ''
      }
    },
    methods: {
      clear () {
        this.searchVal = ''
      },
      jumppage () {
        this.setTitlesname('商品列表')
        this.$router.push({
          path: '/Groupgoods/search',
          query: {
            searchkey: this.searchVal
          }
        })
      },
      ...mapMutations({
        setTitlesname: 'SET_TITLESNAME'
      })
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .search
    position relative
    float left
    display: flex
    align-items: center
    box-sizing: border-box
    width: 80%
    padding: 0 6px
    height: 40px
    background: $color-highlight-background
    border-radius: 6px
    .icon-search
      font-size: 27px
      color: $color-background
    .icon-dismiss
      font-size: 16px
      color: $color-background
      position absolute
      right 14%
    .box
      flex: 1
      margin: 0 5px
      line-height: 30px
      background: $color-highlight-background
      color: $color-text
      font-size: $font-size-medium
      text-indent 10px
      &::placeholder
        color: $color-text-d
</style>

