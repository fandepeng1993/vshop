<template>
  <div class="conhomepage" ref="conhomepage">
      <scroll ref="scroll" :datas="homepagedata.banna"  class="conhomepage-content">
        <div>
          <div class="bannerWraper" >
            <div v-if="homepagedata.banna.length" v-bind:style="{height:screenWidth*0.4+'px'}" class="slider-wrapper">
              <slider :showDot="homepagedata.banna.length>1 " :autoPlay="homepagedata.banna.length>1" :ScrollX="homepagedata.banna.length>1">
                <div v-for="item in homepagedata.banna">
                  <a :href="item.href">
                    <img class="needsclick" v-bind:style="{height:screenWidth*0.4+'px'}" width="100%" :src="imageDomainName+item.image">
                  </a>
                </div>
              </slider>
            </div>
            <Loading v-if="!homepagedata.banna.length"></Loading>
          </div>
          <isat-goodlistshow-wrap :homepagedata="homepagedata"></isat-goodlistshow-wrap>
          <isat-callphone :phone="homepagedata.servicePhone"></isat-callphone>
        </div>
      </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import {imageDomainName} from 'api/config'
  import {getJsonpHomepage, getAxiosHomepage, getWemallHomepage} from 'api/getdata'
  import IsatHotrecommend from 'components/hotrecommend/hotrecommend'
  import {ERR_OK} from 'api/config'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import IsatGoodlistshowWrap from 'components/goodslistshow-wrap/goodslistshow-wrap'
  import IsatCallphone from 'base/callphone/callphone'

  export default {
    data() {
      return {
        homepagedata: {
          banna:[],
          middleNavBars:[],
          navBars:[],
          newGoodsList:[],
          recommendGoodsList:[],
          servicePhone:""
        },
        imageDomainName: imageDomainName,
        screenWidth: document.documentElement.clientWidth
      }
    },
    created () {
      this._getJsonpHomepage()
    /*  console.log(this.screenWidth) */
    },
    mounted() {
      /* ES5中非箭头函数this是指向window对象的
      const that = this
      window.onresize = function temp() {
        that.screenWidth = `${document.documentElement.clientHeight}px`
      } */

      window.addEventListener('resize', () => {
        if (!this.$refs.conhomepage) {
          return
        }
        console.log(123)
        this.getScreenWidth()
      })
    },
    methods: {
      _getJsonpHomepage() {
        getWemallHomepage().then((res) => {
          if (res.ret === '0') {
            this.homepagedata = res.data
          }
        })
      },
      loadImage() {
        if (!this.checkLoad) {
          this.$refs.scroll.refresh()
          this.checkLoad = true
        }
      },
      getScreenWidth() {
        this.screenWidth = document.documentElement.clientWidth
        /* console.log(this.screenWidth) */
      }
    },
    components: {
      Slider,
      IsatHotrecommend,
      Scroll,
      Loading,
      IsatGoodlistshowWrap,
      IsatCallphone
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .conhomepage
    overflow hidden
    height calc(100% - 40px)
    .conhomepage-content
      height:100%
      overflow:hidden
      background $color-highlight-background
      .bannerWraper
        display flex
        align-items center
        background $color-header-bg
        .slider-wrapper
          position:relative
          width:100%
          overflow:hidden
</style>
