<template>
  <div class="goodslistshow">
    <div class="topTile">
      <a>
        <img width="100%" :height="screenWidth*0.078125" v-lazy="showListdata.topurl">
      </a>
    </div>
    <div class="goodslist">
      <ul>
        <li v-for="item in showListdata.listinfo">
          <a>
            <img width="100%" :height="screenWidth*0.48"  v-lazy="item.picurl" >
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
      },
      screenWidth: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    },
    mounted() {
    },
    watch: {
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
        overflow hidden
        text-align center
        img
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
            overflow hidden
            text-align center
            img
              vertical-align middle
</style>
