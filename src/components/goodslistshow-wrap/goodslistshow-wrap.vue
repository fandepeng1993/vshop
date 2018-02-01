<template>

  <div class="wrapperGoods" ref="wrapperGoods">
    <div v-if="goodslistdata">
      <isat-hotrecommend  :screenWidth="screenWidth" :recommend="goodslistdata.recommend"></isat-hotrecommend>
      <isat-goodslistshow :screenWidth="screenWidth" :showListdata="goodslistdata.newgoods"></isat-goodslistshow>
      <isat-goodslistshow :screenWidth="screenWidth" :showListdata="goodslistdata.newgoods"></isat-goodslistshow>
      <isat-goodslistshow :screenWidth="screenWidth" :showListdata="goodslistdata.newgoods"></isat-goodslistshow>
      <isat-goodslistshow :screenWidth="screenWidth" :showListdata="goodslistdata.newgoods"></isat-goodslistshow>
      <isat-goodslistshow :screenWidth="screenWidth" :showListdata="goodslistdata.newgoods"></isat-goodslistshow>
      <isat-goodslistshow :screenWidth="screenWidth" :showListdata="goodslistdata.newgoods"></isat-goodslistshow>
    </div>
    <loading v-if="!goodslistdata"></loading>
  </div>

</template>
<script type="text/ecmascript-6">
  import IsatHotrecommend from 'components/hotrecommend/hotrecommend'
  import IsatGoodslistshow from 'base/goodslistshow/goodslistshow'
  import Loading from 'base/loading/loading'
  export default {
    props: {

    },
    data() {
      return {
        screenWidth: document.documentElement.clientWidth,
        goodslistdata: {
          newgoods: {
            topurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2714043338.jpg',
            listinfo: [
              {
                picurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201712/1315020348.jpg',
                name: '【利川团堡山药】5KG/盒，粘液质高，水分低，香面',
                price: '¥118.00',
                havesale: '2',
                id: 'lichuan'
              },
              {
                picurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2711405629.jpg',
                name: '【贡水白柚】15KG/袋，恩施八宝之一，口感细腻',
                price: '¥108.00',
                havesale: '24',
                id: 'gongshui'
              },
              {
                picurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/3019423519.jpg',
                name: '【深山土蜂蜜】甜到心窝的蜂蜜, 500g',
                price: '¥146.00',
                havesale: '53',
                id: 'shengshan'
              },
              {
                picurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/1000544428.jpg',
                name: '【恩施小黄豆】恩施传统品种“十月黄”',
                price: '¥15.00',
                havesale: '12',
                id: 'enshi'
              }
            ]
          },
          recommend: {
            toppng: [
              {id:'seEnrichedRice', name: '富硒大米', imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/2118160835.jpg'},
              {id:'tea', name: '茶叶', imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/2118162353.jpg'},
              {id:'specialFood', name: '恩施特色食品', imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/2118163154.jpg'}
            ],
            botpng: [
              {id:'hotSale', name: '爆款单品', imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201708/2110375767.jpg'},
              {id:'pinkAge', name: '包邮', imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201708/2110155752.jpg'}
            ]
          }
        }
      }
    },
    computed: {

    },
    created() {

    },
    mounted() {
      window.addEventListener('resize', () => {
        if (!this.$refs.wrapperGoods) {
          return
        }
        this.getScreenWidth()
      })
    },
    methods: {
      getScreenWidth() {
        this.screenWidth = document.documentElement.clientWidth
      }
    },
    watch: {

    },
    components: {
      IsatHotrecommend,
      Loading,
      IsatGoodslistshow
    }

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .wrapperGoods
    color red
    margin-bottom: -1px;
</style>
