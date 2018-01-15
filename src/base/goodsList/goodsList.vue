<template>
    <div class="goodsList">
        <scroll :datas="datas" ref="scrolls" class="goodsListScroll">
          <div>
            <ul class="goodsListUl" :class="{extendul:datas === false}">
              <li  v-for="item in listinfo.concat(listinfo)">
                <a>
                  <div class="imgurl" :style="{backgroundImage:'url('+item.picurl+')'}">
                  </div>
                </a>
                <div class="titleicon">
                  <p class="itemName">{{item.name}}</p>
                  <div class="itemBotom">
                    <p class="itemPrice">{{item.price}}</p>
                    <p class="itemHasale">{{item.havesale}}件已售</p>
                    <i class="icon-gouwuche"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </scroll>
    </div>

</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default {
    props: {
      datas: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        listinfo: [
          {
            picurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201712/1315020348.jpg',
            name: '【利川团堡山药】5KG/盒，粘液质高，水分低，香面',
            price: '¥118.00',
            havesale: '2'
          },
          {
            picurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2711405629.jpg',
            name: '【贡水白柚】15KG/袋，恩施八宝之一，口感细腻',
            price: '¥108.00',
            havesale: '24'
          },
          {
            picurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/3019423519.jpg',
            name: '【深山土蜂蜜】甜到心窝的蜂蜜, 500g',
            price: '¥146.00',
            havesale: '53'
          },
          {
            picurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/1000544428.jpg',
            name: '【恩施小黄豆】恩施传统品种“十月黄”',
            price: '¥15.00',
            havesale: '12'
          }
        ]
      }
    },
    created() {
    },
    methods: {
    },
    components: {
      Scroll
    },
    watch: {
      datas(newVal) {
        if (newVal === true) {
          /* console.log(newVal) */
        }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .goodsList
    width 100%
    height 100%
    overflow hidden
    background #f0f0f0
    .goodsListScroll
      position fixed
      width 100%
      height calc(100% - 90px)
      bottom 100px
      top 90px
      overflow hidden
      background #f0f0f0
      .goodsListUl
        display flex
        -webkit-flex-wrap wrap
        flex-wrap wrap
        justify-content space-around
        li
          width 48%
          margin-top 5px
          background white
          a
            display block
            .imgurl
              width 100%
              padding-top 100%
              background-repeat no-repeat
              background-size: cover
              background-position: center
          .titleicon
            .itemName
              no-wrap()
              margin 5px 0px
              line-height 20px
              text-align center
            .itemBotom
              position relative
              padding-left 10px
              .itemPrice
                color #ef2f2f
                margin 5px 0
              .itemHasale
                color #c5c5c5
                font-size 14px
                line-height 20px
                margin-bottom 5px
              .icon-gouwuche
                position absolute
                right:10px
                bottom 10px
                font-size 25px
                color #ef2f2f
        &.extendul
          display flex
          flex-wrap wrap
          align-items center
          justify-content space-between
          align-content center
          li
            width 100%
            display flex
            flex-direction row
            align-items stretch
            justify-content flex-start
            a
              display block
              .imgurl
                width 140px
                padding-top 100%
                background-repeat no-repeat
                background-size: cover
                background-position: center
            .titleicon
              display flex
              flex-direction column
              .itemName
                flex 1
                text-overflow:inherit;
                overflow:visible;
                white-space inherit
                margin 5px 0px
                line-height 20px
                text-align left
                padding-left 10px
              .itemBotom
                flex 1
                position relative
                padding-left 10px
                display flex
                flex-direction column
                justify-content flex-end
                align-items flex-start
                .itemPrice
                  color #ef2f2f
                  margin 5px 0
                .itemHasale
                  color #c5c5c5
                  font-size 14px
                  line-height 20px
                  margin-bottom 5px
                .icon-gouwuche
                  position absolute
                  right:20px
                  top 50%
                  transform translate3d(0,-50%,0)
                  font-size 25px
                  color #ef2f2f




</style>
