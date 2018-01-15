<template>
  <div class="conhomepage" ref="conhomepage">
      <scroll ref="scroll" :datas="homepagedata"  class="conhomepage-content">
        <div>
          <div class="bannerWraper" v-bind:style="{height:screenWidth*0.4+'px'}">
            <div v-if="homepagedata.length" class="slider-wrapper">
              <slider>
                <div v-for="item in homepagedata">
                  <a :href="item.linkUrl">
                    <img class="needsclick" width="100%" :src="item.picUrl">
                  </a>
                </div>
              </slider>
            </div>
            <Loading v-if="!homepagedata.length"></Loading>
          </div>
          <isat-goodlistshow-wrap></isat-goodlistshow-wrap>
        </div>
      </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import {getJsonpHomepage, getAxiosHomepage} from 'api/gethomepage'
  import IsatHotrecommend from 'components/hotrecommend/hotrecommend'
  import {ERR_OK} from 'api/config'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import IsatGoodlistshowWrap from 'components/goodslistshow-wrap/goodslistshow-wrap'
  export default {
    data() {
      return {
        homepagedata: [],
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
        this.getScreenWidth()
      })
    },
    methods: {
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
      IsatGoodlistshowWrap
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
