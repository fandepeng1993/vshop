<template>
    <div class="goodsList">
        <scroll
          :datas="datas"
          @scroll="scroll"
          :listenScroll="listenScroll"
          :probeType="probeType"
          :pullup="pullup"
          @scrollToEnd="searchMore"
          :beforeScroll="beforeScroll"
          @beforeScroll="listScroll"
          ref="scrolls"
          class="goodsListScroll">
          <div>
            <ul class="goodsListUl" :class="{extendul: rowclass == true}">
              <li  v-for="item in goodsList">
                <a class="needsclick" @click.prevent.stop="goTodetail(item.id)">
                  <div class="imgurl" :style="{backgroundImage:'url('+imageDomainName+item.photo+')'}">
                  </div>
                </a>
                <div class="titleicon">
                  <p class="itemName">{{item.name}}</p>
                  <div class="itemBotom">
                    <p class="itemPrice">{{item.currentPrice/100 | currency('￥')}}</p>
                    <p class="itemHasale">{{item.salesNum}}件已售</p>
                    <i class="icon-gouwuche" v-if="false"></i>
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
  import {imageDomainName} from 'api/config'
  import {getItemList} from 'api/getdata'
  let TIMER = ''
  const digitsRE = /(\d{3})(?=\d)/g
  export default {
    props: {
      datas: {
        type: Boolean,
        default: false
      },
      rowclass: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        goodsList: [],
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
        pageNo: 1,
        pageSize: 10,
        result: [],
        pullup: true,
        hasMore: true,
        beforeScroll: true,
        popupVisible: false,
        searchItemParams: {},
        imageDomainName: imageDomainName
      }
    },
    methods: {
      _getItemList() {
        this.searchItemParams.pageNo = this.pageNo;
        this.searchItemParams.pageSize = this.pageSize;

        getItemList(this.searchItemParams).then((res) => {
          if (res.ret === '0') {
            if(res.data.list.length > 0) {
              this.goodsList = this.goodsList.concat(res.data.list)
            } else {
              this.pageNo--;
            }
          }
        })
      },
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
      //上拉加载更多
      searchMore() {
        console.log('searchMore')

        this.pageNo++;
        this._getItemList();

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
          }
        })
      }
    },
    created() {
      /*console.log(this.$route)*/

      if(this.$route.fullPath.indexOf("comprehensive") != -1) {
        //综合
        this.searchItemParams.orderBy = "";
      } else if(this.$route.fullPath.indexOf("salesVolume") != -1) {
        //销量
        this.searchItemParams.orderBy = "salesNum DESC";
      } else if(this.$route.fullPath.indexOf("newProduct") != -1) {
        //新品
        this.searchItemParams.orderBy = "";
        this.searchItemParams.isNew = 1;
      } else if(this.$route.fullPath.indexOf("price") != -1) {
        //价格
        this.searchItemParams.orderBy = "currentPrice ASC";
      }

      if(this.$route.params.id != "allbaby") {
        this.searchItemParams.sortId = this.$route.params.id;  //商品类别id
      }
      this.searchItemParams.isOnShelf = 1;//是否上架

      //this.searchItemParams.isNew = 1;//是否新品
      //this.searchItemParams.canUseBounty = 1;//是否可用奖励金
      //this.searchItemParams.canUseCoupon = 1;//是否可用优惠券
      //this.searchItemParams.canUseScoreDeduct = 1;//是否可用积分抵扣
      //this.searchItemParams.canUseScoreExchange = 1;//是否可用积分兑换

      this._getItemList();
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

    },
    filters:{      //数据过滤器
        currency:function(value, currency, decimals) {
          value = parseFloat(value)
          if (!isFinite(value) || (!value && value !== 0)) return ''
          currency = currency != null ? currency : '$'
          decimals = decimals != null ? decimals : 2
          var stringified = Math.abs(value).toFixed(decimals)
          var _int = decimals
            ? stringified.slice(0, -1 - decimals)
            : stringified
          var i = _int.length % 3
          var head = i > 0
            ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
            : ''
          var _float = decimals
            ? stringified.slice(-1 - decimals)
            : ''
          var sign = value < 0 ? '-' : ''
          return sign + currency + head +
            _int.slice(i).replace(digitsRE, '$1,') +
            _float
        }

    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .goodsList
    position relative
    width 100%
    height 100%
    .goodsListScroll
      position absolute
      width 100%
      height 100%
      bottom 100px
      top 0px
      overflow hidden
      background #f0f0f0
      .goodsListUl
        display flex
        -webkit-flex-wrap wrap
        flex-wrap wrap
        justify-content space-between
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
              padding-right 10px
              text-align right
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
              width calc(100% - 140px)
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
