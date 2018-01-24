<template>
  <div class="singepagegoods">
    <div>
      <mt-header :title="Goodstitle">
       <!-- <router-link to="/Groupgoods" slot="left">
        </router-link>-->
        <div slot="left">
          <mt-button icon="back" @click="back"></mt-button>
          <!-- <mt-button @click="handleClose">关闭</mt-button>-->
        </div>
        <mt-button @click.native.prevent.stop="handleperson" class="isatbtn" slot="right">
          <i class="icon-huiyuan1"></i>
        </mt-button>
        <mt-button @click.native.prevent.stop="handleshop" class="isatbtn" slot="right">
          <i class="icon-gouwuche"></i>
        </mt-button>
      </mt-header>
    </div>
    <scroll class="scrollpage" ref="scrollpage" @scroll="scroll"
    :probeType="probeType" :listenScroll="listenScroll">
      <div>
        <div class="bannerWraper" v-bind:style="{height:screenWidth+'px'}">
          <div v-if="imgUrl.length" class="slider-wrapper">
            <slider :autoPlay="false" ref="sliderSinger">
              <div v-for="item in imgUrl">
                <a :href="'#'">
                  <img class="needsclick" width="100%" :height="screenWidth+'px'" :src="item.picUrl">
                </a>
              </div>
            </slider>
          </div>
          <Loading v-if="!imgUrl.length"></Loading>
        </div>
        <div class="contentWraper">
          <div class="goodsInfo">
            <h3>【野生葛粉】500克/袋，绿色认证，出口日本，39元/袋</h3>
            <h4><span>¥</span>39</h4>
            <h5>
              <i>原价</i>
              <del>¥39.00</del>
            </h5>
            <ul class="tip">
              <li>快递：10.00</li>
              <li>426人购买</li>
              <li class="last">湖北恩施</li>
            </ul>
          </div>
          <div class="propsbox" @click.prevent.stop="alertBtbox">
            <div class="propscon">
              <span>商品规格选择</span>
              <i class="icon-right"></i>
            </div>
          </div>
          <isat-appraise></isat-appraise>
          <isat-shopentrance></isat-shopentrance>
          <isat-shopinfo></isat-shopinfo>
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
      <isat-bottombox :imgurl="imgUrl[0]" class="bottombox" @closeBotBox="closeBotBox" v-show="shower"></isat-bottombox>
    </transition>
    <isat-bottom  class="fixedBottom"></isat-bottom>
    <isat-backtop v-show="isShow" @backtop="backtop"></isat-backtop>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import Loading from 'base/loading/loading'
  import {getJsonpHomepage, getAxiosHomepage} from 'api/gethomepage'
  import {ERR_OK} from 'api/config'
  import IsatBottombox from 'base/bottombox/bottombox'
  import IsatMask from 'base/mask/mask'
  import IsatBottom from 'base/isatbottom/isatbottom'
  import IsatBacktop from 'base/backtop/backtop'
  import IsatAppraise from 'components/isatappraise/isatappraise'
  import IsatShopentrance from 'components/shopentrance/shopentrance'
  import IsatShopinfo from 'components/shopinfo/shopinfo'
  export default {
    data() {
      return {
        Goodstitle: '商品详情',
        homepagedata: [],
        screenWidth: document.documentElement.clientWidth,
        imgUrl: [
          {picUrl: 'http://file.jjiehao.com/files/87ef8d06/1331c0e77c4376cf28a4b45c961/201707/2718343054.jpg'},
          {picUrl: 'http://file.jjiehao.com/files/87ef8d06/1331c0e77c4376cf28a4b45c961/201707/2718343625.jpg'},
          {picUrl: 'http://file.jjiehao.com/files/87ef8d06/1331c0e77c4376cf28a4b45c961/201707/2718350029.jpg'}
        ],
        popupVisible: true,
        shower: false,
        isShow: false,
        probeType: 3,
        listenScroll: true
      }
    },
    created() {
      this._getJsonpHomepage()
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
      back() {
        this.$refs.scrollpage.scrollTo(0, 0, 0)
        this.$router.back()
      },
      _getJsonpHomepage() {
        getJsonpHomepage().then((res) => {
          if (res.code === ERR_OK) {
            /* console.log(res.data.slider) */
            this.homepagedata = res.data.slider
          }
        })
      },
      loadImage() {
        if (!this.checkLoad) {
          this.$refs.scrollpage.refresh()
          this.checkLoad = true
        }
      },
      getScreenWidth() {
        this.screenWidth = document.documentElement.clientWidth
        /* console.log(this.screenWidth) */
      },
      alertBtbox() {
        this.shower = true
      },
      closeBotBox(param) {
        this.shower = param
      },
      backtop(backtime) {
        this.$refs.scrollpage.scrollTo(0, 0, backtime)
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
      IsatShopinfo
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
    .icon-gouwuche
      color white
      font-size 23px
      margin 0 5px
    .icon-huiyuan1
      color white
      font-size 23px
      margin 0 5px
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
