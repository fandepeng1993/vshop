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
            <p class="goodsName">{{item.name}}</p>
          </a>
          <div class="text-box">
            <p>{{item.price}}</p>
            <p class="hasSale ">{{item.havesale}}件已售</p>
            <div  @click.prevent.stop.self="addShopping" class="icon-gouwuche "></div>
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
      addShopping() {
        console.log(123)
      }
    },
    mounted() {
    },
    watch: {
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
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
            .goodsName
              no-wrap()
              font-size 19px
              text-align left
              color: rgba(51,51,51 ,1)
          .text-box
            position relative
            padding-left 15px
            p
              margin 5px 0
              &.hasSale
                color rgba(200,200,200 ,1)
                font-size 14px
            .icon-gouwuche
              position absolute
              right 10px
              top 50%
              transform translateY(-50%)
              font-size 20px


</style>
