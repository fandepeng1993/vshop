<template>
  <transition name="slide">
    <div class="membershipcard">
      <isat-publictoptitle :isback="false" :defaultHome="'/Membercenter'" :titles="titlesname"></isat-publictoptitle>
      <div class="content">
        <img src="../../common/images/nocard.png" alt="">
        <p>
          您暂时还没有会员卡哦~<br/>去看看商家发布的会员卡吧
        </p>

        <h3><router-link class="a" to="/Membercenter/membershipcard/membershipcardList">前往</router-link></h3>
      </div>
      <router-view></router-view>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  export default {
    data() {
      return {
        titlesname: '会员卡'
      }
    },
    components: {
      IsatPublictoptitle
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .membershipcard
    position fixed
    top 0px
    bottom 0px
    width 100%
    height 100%
    background-color #f5f4f3
    .content
      padding-top 20%
      text-align center
      img
        width 30%
        margin 0 auto
      p
        color #999999
        margin 10px 0px
        font-size 14px
        line-height 20px
      h3
        .a
          margin: 0 auto;
          padding: 0.5rem 1rem
          display: block
          border-radius: 0.5rem
          border: 1px solid #f6b537
          width: 4rem
          color: #f6b537
  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(100%,0,0)
  .slide-leave-to
    transform translate3d(100%,0,0)
</style>
