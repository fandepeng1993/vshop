<template>
    <div class="goodsList">
        <scroll :datas="datas" @scroll="scroll"
                :listenScroll="listenScroll"
                :probeType="probeType"
                :pullup="pullup"
                @scrollToEnd="searchMore"
                :beforeScroll="beforeScroll"
                @beforeScroll="listScroll"
                ref="scrolls" class="goodsListScroll">
          <div>
            <ul class="goodsListUl" :class="{extendul:datas === false}">
              <li  v-for="item in listinfo.concat(listinfo)">
                <a class="needsclick" @click.prevent.stop="goTodetail(item.linkUrl)">
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
            <loading></loading>
          </div>
        </scroll>
        <isat-backtop v-show="isShow" @backtop="backtop"></isat-backtop>
        <mt-popup
          v-model="popupVisible"
          position="top"
          popup-transition="popup-fade"
          :modal="false"
          class="tipTop"
        >
          <p>更新成功</p>
        </mt-popup>
    </div>

</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import IsatBacktop from 'base/backtop/backtop'
  let TIMER = ''
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
            havesale: '2',
            linkUrl: 'lichuan'
          },
          {
            picurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2711405629.jpg',
            name: '【贡水白柚】15KG/袋，恩施八宝之一，口感细腻',
            price: '¥108.00',
            havesale: '24',
            linkUrl: 'gongshui'
          },
          {
            picurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/3019423519.jpg',
            name: '【深山土蜂蜜】甜到心窝的蜂蜜, 500g',
            price: '¥146.00',
            havesale: '53',
            linkUrl: 'shenshan'
          },
          {
            picurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/1000544428.jpg',
            name: '【恩施小黄豆】恩施传统品种“十月黄”',
            price: '¥15.00',
            havesale: '12',
            linkUrl: 'enshi'
          }
        ],
        isShow: false,
        probeType: 3,
        listenScroll: true,
        page: 1,
        result: [],
        pullup: true,
        hasMore: true,
        beforeScroll: true,
        popupVisible: false
      }
    },
    methods: {
      scroll(pos) {
        if (pos.y < -300 && this.isShow === false) {
          this.isShow = true
        } else if (pos.y > -300 && this.isShow === true) {
          this.isShow = false
        }
      },
      backtop(backtime) {
       this.$refs.scrolls.scrollTo(0, 0, backtime)
      },
      searchMore() {
        console.log('searchMore')
        if (!this.popupVisible) {
          this.popupVisible = true
        } else {
            return
        }
      },
      listScroll() {
        console.log('listScroll')
      },
      refresh() {
        this.$refs.scrolls.refresh()
      },
      goTodetail(item) {
        this.$router.push({
          path: `/Goodsdetail/${item}`,
          query: {
            name: 'fdp',
            age: 24
          }
        })
      }
    },
    created() {
      console.log(this.$route)
    },
    components: {
      Scroll,
      Loading,
      IsatBacktop
    },
    watch: {
      datas(newVal) {
        if (newVal === true) {
          /* console.log(newVal) */
        }
      },
      popupVisible(newVal) {
        let me = this
        if (newVal) {
          TIMER = setTimeout(() => {
            me.popupVisible = false
          }, 1000)
        } else {
          clearTimeout(TIMER)
          return
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
  .tipTop
    width: 100%;
    height: 40px;
    text-align: center;
    background-color: rgba(0,0,0,.7);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
    p
      line-height 40px
      color #fff
      font-size 20px

</style>
