<template>
  <div class="goodslistshow">
    <div class="topTile">
      <a>
        <img v-lazy="showListdata.topurl">
      </a>
    </div>
    <div class="goodslist">
      <ul v-if="showListdata.listinfo.length">
        <li v-for="item in showListdata.listinfo">
          <a>
            <img v-lazy="item.picurl" >
            <p>{{item.name}}</p>
          </a>
          <div>
            <p>{{item.price}}</p>
            <p>{{item.havesale}}件已售</p>
            <i></i>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      showListdata: {
        type: Object,
        default: {}
      }
    },
    created() {
     /* console.log(this.showListdata)*/
    },
    methods: {
    },
    watch: {
      showListdata() {
        setTimeout(() => {
          this.$parent.refresh()
        }, 500)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/variable"
  .goodslistshow
    overflow hidden
    .topTile
      a
        display block
        img
          width 100%
          vertical-align middle
    .goodslist
      overflow hidden
      ul
        display flex
        -webkit-flex-wrap: wrap
        flex-wrap: wrap
        background #f0f0f0
        justify-content:space-around
        li
          width 48%
          a
            display block
            img
              width 100%
              vertical-align middle

</style>
