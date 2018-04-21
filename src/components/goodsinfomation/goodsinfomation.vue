<template>
  <transition name="slide">
    <div class="goodsInfo">
       <!-- <mt-header :title="Tnames">
          &lt;!&ndash;<div slot="left">
            <mt-button icon="back" @click="back"></mt-button>
            &lt;!&ndash; <mt-button @click="handleClose">关闭</mt-button>&ndash;&gt;
          </div>&ndash;&gt;
          <router-link to="/Groupgoods" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button @click.native.prevent.stop="handleperson" class="isatbtn" slot="right">
            <i class="icon-huiyuan1"></i>
          </mt-button>
          <mt-button @click.native.prevent.stop="handleshop" class="isatbtn" slot="right">
            <i class="icon-gouwuche"></i>
          </mt-button>
        </mt-header>-->
      <isat-publictoptitle
        :titles="Tnames"
        :isback="false"
        :defaultHome="'/Groupgoods'"
      >
      </isat-publictoptitle>
      <div class="goodslistwrap">
        <isat-infour-tab :datastab="datastab" :menuIcon="rowValue" @changeIcon="changeValue"></isat-infour-tab>
        <!-- tab-container -->
        <transition name="slides" mode="out-in">
          <router-view :rowclass="rowValue"></router-view>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  /* transition all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55) */
  import IsatInfourTab from 'base/infourtab/infourtab'
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import {mapGetters} from 'vuex'
  export default {
    props: {
      goodsid: {
        type: String,
        default: ''
      },
      nexttitle: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        selected: '1',
        active: 'tab-container2',
        rowValue: false,
        datastab: [
          {name: '综合', srcfirst: '/Groupgoods/', srclast: '/comprehensive'},
          {name: '销量', srcfirst: '/Groupgoods/', srclast: '/salesVolume'},
          {name: '新品', srcfirst: '/Groupgoods/', srclast: '/newProduct'},
          {name: '价格', srcfirst: '/Groupgoods/', srclast: '/price'}
        ]
      }
    },
    computed: {
      Tnames() {
        if(this.$route.params.id==="activity") {
          if(this.$route.query.activityType=="2"){
            return "满减宝贝"
          } else if(this.$route.query.activityType=="3") {
              return "限时折扣宝贝"
          }
        } else if(this.$route.query.searchkey) {
            return "搜索"
        } else {
          return this.nexttitle
        }
      }
      /* Goodstitle() {
        return this.titlesname
      },
      ...mapGetters(['titlesname']) */
    },
    created() {
      this.goodsId = this.$route.params
      this.formatUrl()
     /* console.log(this.$route, this.$router) */
    },
    mounted() {
      this.$on('acciveHome', (data) => {
        console.log()
      })
    },
    methods: {
      changeValue(newval) {
        this.rowValue = newval
      },
      handleperson() {
        /* console.log(123) */
      },
      handleshop() {
       /* console.log(456) */
      },
      back() {
        this.$router.back()
      },
      formatUrl() {
        let dirPath = this.$route.params.id;
        for(let i in this.datastab) {
          let item = this.datastab[i]
          if(dirPath == "search") {
            if(this.$route.query.searchkey && item.srclast.indexOf("searchkey=") == -1) {
              item.srclast = item.srclast + "?searchkey=" + this.$route.query.searchkey;
            }
          } else {
            if(this.$route.fullPath.indexOf("?") != -1) {
              item.srclast = item.srclast + this.$route.fullPath.substring(this.$route.fullPath.indexOf("?"));
            }
          }
        }
        console.log(this.datastab);
      }
    },
    components: {
      IsatInfourTab,
      IsatPublictoptitle
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
.goodsInfo
    background white
    position fixed
    width 100%
    height 100%
    bottom 0
    top 0
  .goodslistwrap
    width 100%
    height 100%
    overflow hidden

  .icon-gouwuche
    color white
    font-size 23px
    margin 0 5px
  .icon-huiyuan1
    color white
    font-size 23px
    margin 0 5px

  .slide-enter-active,.slide-leave-active
    transition all 0.3s
  .slide-enter
    transform translate3d(100%,0,0)
  .slide-leave-to
    transform translate3d(100%,0,0)

  .slides-enter-active,.slides-leave-active
    transition all 0.3s
  .slides-enter
    transform translate3d(100%,0,0)
  .slides-leave-to
    transform translate3d(-100%,0,0)
</style>
