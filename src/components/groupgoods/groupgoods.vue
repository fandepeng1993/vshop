<template>
  <div class="groupgoods">
    <mt-header title="商品分组列表">
      <div slot="left">
        <mt-button class="goodsBtn" @click="back"  icon="back"></mt-button>
        <!-- <mt-button @click="handleClose">关闭</mt-button>-->
      </div>
      <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>
    <div class="srcollWindow">
       <scroll ref="shortcut" class="goods-content">
         <div id="Isat" >

            <div id="isat1">
              <isat-searchtitle @query="onQueryChange" :babyListdata2="babyListdata2">
            </isat-searchtitle>
            </div>

           <div id="isat2"  v-show="!query">
             <isat-babylist @select="selectGoodsId" :babyListdata="babyListdata">
             </isat-babylist>
           </div>

           <div id="isat3" ref="searchResult" class="search-result" v-show="query">
             <isat-babylist ref="suggest" @select="selectGoodsId" @listScroll="blurInput" :babyListdata="babyListdata2.concat(babyListdata2)"  :query="query"></isat-babylist>
           </div>

         </div>
       </scroll>
      </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import IsatSearchtitle from 'base/searchtitle/searchtitle'
  import IsatBabylist from 'base/babylist/babylist'
  export default {
    data() {
      return {
        result: [],
        query: '',
        goodsId: '',
        babyListdata: [{name: '全部宝贝', id: 'allbaby'}, {name: '茶叶', id: 'tea'}, {name: '恩施特色水果', id: 'fruits'}, {name: '硒片', id: 'selenium'}, {name: ' 富硒大米', id: 'seEnrichedRice'}, {name: '腊味', id: 'cured'}, {name: '恩施特色食品', id: 'specialFood'}, {name: '爆款单品', id: 'hotSale'}],
        babyListdata2: [{name: '茶叶', id: 'tea'}, {name: '恩施特色水果', id: 'fruits'}, {name: '硒片', id: 'selenium'}, {name: ' 富硒大米', id: 'seEnrichedRice'}, {name: '腊味', id: 'cured'}, {name: '恩施特色食品', id: 'specialFood'}, {name: '全部宝贝', id: 'allbaby'}, {name: '爆款单品', id: 'hotSale'}]

      }
    },
    created() {
      /*console.log(this.$router)*/
    },
    methods: {
      handleClose() {
        console.log(123)
      },
      back() {
        /*this.$router.back()*/
        this.$router.push({path: '/Homepage'})
      },
      onQueryChange(query) {
        this.query = query
      },
      saveSearch() {
      },
      blurInput() {
      },
      selectGoodsId (goodsid) {
        this.$router.push({
          path: `/Groupgoods/${goodsid.id}`,
          query: {
            name:'fdp',
            age:24
          }
        })
      }
    },
    components: {
      Scroll,
      IsatSearchtitle,
      IsatBabylist
    },
    watch: {
      query(newQuery) {
        setTimeout(() => {
          this.$refs.shortcut.refresh()
        }, 20)
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .groupgoods
    position: fixed;
    width: 100%;
    overflow: hidden;
    top: 0px;
    bottom: 55px;
    z-index 2
    .srcollWindow
      height calc(100% - 40px)
      overflow hidden
      background #333
      .goods-content
        height 100%
        overflow hidden
        background: white;
        /*.searchTitle
          height 52px
          overflow hidden*/
</style>
