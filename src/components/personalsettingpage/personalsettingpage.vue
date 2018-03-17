<template>
  <transition name="slidex">
    <div class="personalsettingpage">
      <isat-publictoptitle
        :titles="'修改头像'"
      ></isat-publictoptitle>
      <div class="portrait">
        <div class="portrait">
          <div class="pict">
            <img src="http://backend.jjiehao.com/mobile/shop/images/login-img1.png">
          </div>
          <div class="btn">
            <a @click.prevent.stop="jumpage" class="external">上传头像</a>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  export default {
    methods: {
      jumpage() {
        this.$router.push({
          path: this.$route.fullPath + '/uploadImg'
        })
      }
    },
    components: {
      IsatPublictoptitle
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .personalsettingpage
    position fixed
    width 100%
    height 100%
    top 0px
    bottom 0px
    overflow hidden
    background-color #fff
    .portrait
      padding 20px
      .pict
        width 40%
        margin 0 auto 50px
        background-color #fff
        img
          width 100%
          border-radius 50%
      .btn
        width 50%
        margin 0 auto
        a
          text-align: center;
          display: block;
          color: #fff;
          background: #ef2f2f;
          font-size: 17px;
          line-height: 35px;
          border-radius: 5px;
          &:active
            background: #26a2ff
  .slidex-enter-active,.slidex-leave-active
    transition transform  0.3s
  .slidex-enter
    transform translate3d(100%,0,0)
  .slidex-leave-to
    transform translate3d(100%,0,0)
</style>
