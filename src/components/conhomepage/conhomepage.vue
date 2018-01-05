<template>
  <div class="conhomepage" ref="conhomepage">
      <scroll ref="scroll" :datas="goodslistdata"  class="conhomepage-content">
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
          <div v-if="goodslistdata">
            <isat-hotrecommend :screenWidth="screenWidth" :recommend="goodslistdata.recommend"></isat-hotrecommend>
            <isat-goodslistshow :screenWidth="screenWidth" :showListdata ="goodslistdata.newgoods"></isat-goodslistshow>
            <isat-goodslistshow :screenWidth="screenWidth" :showListdata ="goodslistdata.newgoods"></isat-goodslistshow>
            <isat-goodslistshow :screenWidth="screenWidth" :showListdata ="goodslistdata.newgoods"></isat-goodslistshow>
            <isat-goodslistshow :screenWidth="screenWidth" :showListdata ="goodslistdata.newgoods"></isat-goodslistshow>
            <isat-goodslistshow :screenWidth="screenWidth" :showListdata ="goodslistdata.newgoods"></isat-goodslistshow>
            <isat-goodslistshow :screenWidth="screenWidth" :showListdata ="goodslistdata.newgoods"></isat-goodslistshow>
            <isat-goodslistshow :screenWidth="screenWidth" :showListdata ="goodslistdata.newgoods"></isat-goodslistshow>
            <isat-goodslistshow :screenWidth="screenWidth" :showListdata ="goodslistdata.newgoods"></isat-goodslistshow>
            <isat-goodslistshow :screenWidth="screenWidth" :showListdata ="goodslistdata.newgoods"></isat-goodslistshow>
            <isat-goodslistshow :screenWidth="screenWidth" :showListdata ="goodslistdata.newgoods"></isat-goodslistshow>
          </div>
          <loading v-if="!goodslistdata"></loading>
        </div>
      </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import {getJsonpHomepage, getAxiosHomepage} from 'api/gethomepage'
  import IsatHotrecommend from 'components/hotrecommend/hotrecommend'
  import IsatGoodslistshow from 'components/goodslistshow/goodslistshow'
  import {ERR_OK} from 'api/config'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  export default {
    data() {
      return {
        homepagedata: [],
        goodslistdata: {
          newgoods: {
            topurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2714043338.jpg',
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
          },
          recommend: {
        toppng: ['http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/2118160835.jpg', 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/2118162353.jpg', 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/2118163154.jpg'],
          botpng: ['http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201708/2110375767.jpg', 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201708/2110155752.jpg']
      }
        },
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
        console.log(this.screenWidth)
      }
    },
    components: {
      Slider,
      IsatHotrecommend,
      IsatGoodslistshow,
      Scroll,
      Loading
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
