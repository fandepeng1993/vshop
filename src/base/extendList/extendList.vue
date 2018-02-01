<template>
  <div class="extendList">
    <ul>
      <li v-for="n in 20">
        <div class="title">
          <span>{{n.toString()}}.使用须知</span>
          <i class="icon-right" :class="{on: n === temp}" @click.prevent.stop="rotate($event,n)"></i>
        </div>
        <transition name="slide">
          <div class="extendList" v-show="n === temp">
            <p>1、消费时提交订单会员卡自动打折或者包邮。</p>
            <p>2、会员卡不可转赠他人或者删除。</p>
            <p>3、满足会员卡升级条件，系统自动升级</p>
            <p>4、会员卡不可折现。</p>
            <p>关于会员卡相关疑问,可致电客服了解详情,解释权归本店所有</p>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  /* import {prefixStyle} from 'common/js/dom' */
  /* const transform = prefixStyle('transform') */
  export default {
    data() {
      return {
        temp: -1
      }
    },
    methods: {
      rotate(event, index) {
        this.temp = index
        this.$emit('refresh')
        /* event.target.style[transform] = 'rotate(90deg)' */
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .extendList
    ul
      li
        background-color #fff
        border-bottom: 1px solid #f5f4f3;
        padding: 14px 14px 0 14px
        .title
          font-size 18px
          text-align left
          color #333333
          padding-bottom 10px
          display flex
          justify-content space-between
          align-items center
          i
            padding 5px
            transition transform 0.2s ease-in
            &.on
              transform rotate(90deg)
        .extendList
          padding 0px 10px 10px 10px
          text-align left
          font-size 14px
          color #666666
          overflow hidden
          p
            line-height 22px
  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(100%,0,0)
  .slide-leave-to
    transform translate3d(100%,0,0)
</style>
