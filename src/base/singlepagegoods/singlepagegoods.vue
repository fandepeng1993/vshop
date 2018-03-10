<template>
  <div class="singepagegoods">
    <isat-publictoptitle :titles="Goodstitle"></isat-publictoptitle>
    <scroll class="scrollpage" ref="scrollpage" @scroll="scroll"
    :probeType="probeType" :listenScroll="listenScroll">
      <div>
        <div class="bannerWraper" v-bind:style="{height:screenWidth+'px'}">
          <div v-if="imgUrl.length > 0" class="slider-wrapper">
            <slider :autoPlay="false" ref="sliderSinger" >
              <div v-for="item in imgUrl">
                <a :href="'#'">
                  <img class="needsclick" width="100%" :height="screenWidth+'px'" :src="imageDomainName+item.picUrl">
                </a>
              </div>
            </slider>
          </div>
          <Loading v-if="!imgUrl.length"></Loading>
        </div>
        <div class="contentWraper">
          <div class="goodsInfo">
            <h3>{{goodsEntity.name}}</h3>
            <h4>{{goodsEntity.currentPrice/100 | currency('￥')}}</h4>
            <h5>
              <i>原价</i>
              <del>{{goodsEntity.originalPrice/100 | currency('￥')}}</del>
            </h5>
            <ul class="tip">
              <li>快递：{{goodsEntity.freightPrice/100 | currency('￥')}}</li>
              <li>{{goodsEntity.salesNum}}人购买</li>
              <li class="last">{{goodsEntity.productPlace}}</li>
            </ul>
          </div>
          <div class="propsbox" @click.prevent.stop="alertBtbox">
            <div class="propscon">
              <span>商品规格选择</span>
              <i class="icon-right"></i>
            </div>
          </div>
          <isat-appraise :itemId="id"></isat-appraise>
          <isat-shopentrance></isat-shopentrance>
          <isat-shopinfo @refreshscroll="refreshscroll"></isat-shopinfo>
          <!--<mt-popup
            v-model="popupVisible"
            position="top"
            closeOnClickModal="true"
            popup-transition="popup-fade">
            <div style="color: red">
              <span>asdasdasdas</span>
            </div>
          </mt-popup>-->
        </div>
      </div>
    </scroll>
    <isat-mask @cancelMask="closeBotBox" v-show="shower"></isat-mask>
    <transition name="propUp" >
      <isat-bottombox :imgurl="imgUrl.length > 0 ? imgUrl[0].picUrl : ''" :goodsEntity="goodsEntity" class="bottombox" @closeBotBox="closeBotBox" v-show="shower" :buyerType="buyerType"></isat-bottombox>
    </transition>
    <isat-bottom @openBottombox="alertBtbox" class="fixedBottom"></isat-bottom>
    <isat-backtop v-show="isShow" @backtop="backtop"></isat-backtop>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import Loading from 'base/loading/loading'
  import {getJsonpHomepage, getAxiosHomepage} from 'api/gethomepage'
  import {ERR_OK, imageDomainName} from 'api/config'
  import {getItemDetail} from 'api/getdata'
  import IsatBottombox from 'base/bottombox/bottombox'
  import IsatMask from 'base/mask/mask'
  import IsatBottom from 'base/isatbottom/isatbottom'
  import IsatBacktop from 'base/backtop/backtop'
  import IsatAppraise from 'components/isatappraise/isatappraise'
  import IsatShopentrance from 'components/shopentrance/shopentrance'
  import IsatShopinfo from 'components/shopinfo/shopinfo'
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  const digitsRE = /(\d{3})(?=\d)/g
  export default {
    data() {
      return {
        id: "",
        goodsEntity: {},
        Goodstitle: '商品详情',
        screenWidth: document.documentElement.clientWidth,
        imgUrl: [],
        popupVisible: true,
        shower: false,
        buyerType: 1, //购买方式，1--购物车，2--立即购买
        isShow: false,
        probeType: 3,
        listenScroll: true,
        imageDomainName: imageDomainName,
        fullpath: ''
      }
    },
    created() {
      this.id = this.$route.params.id;
      this._getItemDetail()
      this.fullpath = this.$route.query.fullpath
    },
    mounted() {
      window.addEventListener('resize', () => {
        if (!this.$refs.sliderSinger) {
          return
        }
        this.getScreenWidth()
      })
    },
    methods: {
      _getItemDetail() {
        getItemDetail(this.id).then((res) => {
          if (res.ret === '0') {
            this.goodsEntity = res.data
            let photos = res.data.photoUrls.split("|")
            this.imgUrl.splice(0,this.imgUrl.length);
            for (let photo in photos) {
              if(photos[photo] != "") {
                this.imgUrl.push({picUrl: photos[photo]})
              }
            }
            console.log(this.imgUrl)
          }
        })
      },
      back() {
        this.$refs.scrollpage.scrollTo(0, 0, 0)
        this.$router.back()
      },
      getScreenWidth() {
        this.screenWidth = document.documentElement.clientWidth
        /* console.log(this.screenWidth) */
      },
      alertBtbox(buyerType) {
        this.shower = true
        this.buyerType = buyerType
      },
      closeBotBox(param) {
        this.shower = param
      },
      backtop(backtime) {
        this.$refs.scrollpage.scrollTo(0, 0, backtime)
      },
      refreshscroll() {
        this.$refs.scrollpage.refresh()
      },
      scroll(pos) {
        // 定义滚动 监听前提条件 probeType: 3,listenScroll: true
        if (pos.y < -300 && this.isShow === false) {
          this.isShow = true
        } else if (pos.y > -300 && this.isShow === true) {
          this.isShow = false
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

    },
    watch: {
      '$route': function () {
        this.id = this.$route.params.id;
        this._getItemDetail()
      }
    },
    components: {
      Scroll,
      Slider,
      Loading,
      IsatBottombox,
      IsatMask,
      IsatBottom,
      IsatBacktop,
      IsatAppraise,
      IsatShopentrance,
      IsatShopinfo,
      IsatPublictoptitle
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .singepagegoods
    height 100%
    .scrollpage
      width 100%
      height calc(100% - 95px)
      overflow hidden
      /*background skyblue*/
      .contentWraper
        .goodsInfo
          padding: 0.3rem 1rem 0 0.5rem;
          h3
            font-size: 18px;
            color: #4d4d4d;
            font-weight: normal;
            line-height 24px
          h4
            margin-top: 0.2rem;
            font-weight: normal;
            font-size: 25px;
            color: #ef2f2f;
            line-height:25px;
            span
              font-size 18px
          h5
            color #999
            font-size 14px
            line-height 22px
            i
              font-style normal
          .tip
            display flex
            justify-content space-between
            color #999
            font-size 14px
            li
              flex 1
              line-height 22px
              padding: 0.2rem 0 0.2rem 0
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              &.last
                text-align right
        .propsbox
          .propscon
            display: flex;
            background: #fff;
            padding: 10px;
            line-height: 20px;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            border-bottom: 1px solid #f5f4f3;
    .bottombox
      width 100%
      height 200px
      position fixed
      z-index 106
      bottom 0px
    .fixedBottom
      position fixed
      height 55px
      width 100%
      overflow hidden
      bottom 0px
    .slider-wrapper
      position:relative
      width:100%
      overflow:hidden

.propUp-enter
  transform translateY(200px)
.propUp-enter-active
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)
.propUp-enter-to
  transform translateY(0px)
.propUp-leave
  transform translateY(0px)
.propUp-leave-active
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)
.propUp-leave-to {
  transform translateY(200px)
}
</style>
