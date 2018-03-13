<template>

  <div class="wrapperGoods" ref="wrapperGoods">
    <div v-if="homepagedata.goodsList">
      <isat-hotrecommend :screenWidth="screenWidth" :homepagedata="homepagedata"></isat-hotrecommend>

      <div v-for="item in homepagedata.goodsList">
        <isat-goodslistshow :screenWidth="screenWidth" :showListdata="item"></isat-goodslistshow>
      </div>
    </div>
    <loading v-if="!homepagedata.goodsList"></loading>
  </div>

</template>
<script type="text/ecmascript-6">
  import IsatHotrecommend from 'components/hotrecommend/hotrecommend'
  import IsatGoodslistshow from 'base/goodslistshow/goodslistshow'
  import Loading from 'base/loading/loading'
  export default {
    props: {
      homepagedata: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        screenWidth: document.documentElement.clientWidth

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
