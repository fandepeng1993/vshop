<template>
  <transition name="slide">
    <div class="goodsInfo">
      <div>
        <mt-header :title="Goodstitle">
          <router-link to="/Groupgoods" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button @click.native.prevent.stop="handleperson" class="isatbtn" slot="right">
            <i class="icon-huiyuan1"></i>
          </mt-button>
          <mt-button @click.native.prevent.stop="handleshop" class="isatbtn" slot="right">
            <i class="icon-gouwuche"></i>
          </mt-button>
        </mt-header>
      </div>
      <div class="goodslistwrap">
        <isat-infour-tab :datas="rowValue" @changeIcon="changeValue"></isat-infour-tab>
        <!-- tab-container -->
        <router-view :datas="rowValue"></router-view>
      </div>

    </div>

  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatInfourTab from 'base/infourtab/infourtab'
  export default {
    props: {
      Goodstitle: {
        type: String,
        default: '商品列表'
      },
      goodsid: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        selected: '1',
        active: 'tab-container2',
        rowValue: true
      }
    },
    created() {
      this.goodsId = this.$route.params
     /* console.log(this.$route, this.$router) */
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
      }

    },
    components: {
      IsatInfourTab
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

  .slide-enter,.slide-leave-to
    transform translate3d(100%,0,0)

</style>
