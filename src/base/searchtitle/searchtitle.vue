<template>
  <div class="searchTitle">
    <div class="searchbar" :class="{'searchbar-active':isActive}" ref="searchbar">
      <a class="searchbar-cancel external" href="javascript:void(0)">搜索</a>
      <div class="search-input">
        <label class="icon-search" for="search"></label>
        <input  @blur="isActive=!isActive"  @focus="getFocus" id="search" v-model="query" :placeholder="placeholder">
        <i @click="clear" class="icon-dismiss" v-show="query"></i>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {debounce} from 'common/js/util'
  export default {
    props: {
      babyListdata2: {
        type: Array,
        default: []
      },
      placeholder: {
        type: String,
        default: '输入关键字...'
      }
    },
    data() {
      return {
        query: '',
        isActive: false
      }
    },
    created() {
      this.$watch('query', debounce((newQuery) => {
        this.$emit('query', newQuery)
      }, 200))
    },
    methods: {
      getFocus() {
        this.isActive = true
      },
      clear() {
        this.query = ''
      },
      setQuery(query) {
        this.query = query
      },
      blur() {
        this.$refs.query.blur()
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .searchTitle
    padding 8px 10px
    background white
    .searchbar
      .searchbar-cancel
        margin-right:calc(-20% - 8px);
        width:20%;
        float: right;
        height: 28px;
        line-height: 28px;
        text-align: center;
        -webkit-transition: all .3s;
        transition: all .3s;
        opacity: 0;
        -webkit-transform: translate3d(0,0,0)
        transform: translate3d(0,0,0)
        color #5f646e
      .search-input
        position relative
        color #b4b4b4
        .icon-search
          position absolute
          font-size 22px
          font-weight bold
          top 50%
          left 2%
          -webkit-transform translate3d(0,-50%,0)
          transform translate3d(0,-50%,0)
        .icon-dismiss
          position: absolute;
          right: 2%;
          top: 50%;
          transform: translateY(-50%)
          -webkit-transform translateY(-50%)
        #search
          height 28px
          width 100%
          background #f5f4f3
          border-radius 4px
          outline none
          text-indent: 12%;
          &::placeholder
            color: #b4b4b4
      &.searchbar-active
        .searchbar-cancel
          opacity 1
          -webkit-transform: translate3d(calc(-100% - 8px),0,0)
          transform: translate3d(calc(-100% - 8px),0,0)
        .search-input
          width 80%
</style>
