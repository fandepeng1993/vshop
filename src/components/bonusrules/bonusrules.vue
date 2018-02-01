<template>
  <transition name="slide">
    <div class="bonusrules">
      <isat-publictoptitle :isback="false" :defaultHome="'/Membercenter/bounty/all'" :titles="titlesname"></isat-publictoptitle>
      <div class="content">
        <div class="bonus-rule">
          <ul>
            <li>
              <p class="text-red">一、适用范围</p>
              <p>1、奖励金仅限于在购买奖励金商品时使用，下单时可使用奖励金抵现金，非奖励金商品无法使用奖励金抵扣。</p>
              <p>2、活动商品（如：疯狂砍价、限时购、限时拼团等）不参与奖励金优惠活动。</p>
            </li>
            <li>
              <p class="text-red">二、抵扣规则</p>
              <p>1、消费奖励金商品时，奖励金抵扣金额由商家设置；奖励金抵扣在商品会员卡折扣后最终商品结算金额基础上进行使用，运费不参与奖励金抵扣。</p>
              <p>2、奖励金与优惠券、积分抵扣优惠活动只能选择其中一种优惠活动，无法同时累计优惠。</p>
            </li>
            <li>
              <p class="text-red">三、奖励金商品售后维权</p>
              <p>1、使用奖励金抵扣的商品发生退货时，奖励金不退还，仅退回实际支付金额。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  export default {
    data() {
      return {
        titlesname: '奖励金规则'
      }
    },
    components: {
      IsatPublictoptitle
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .bonusrules
    position fixed
    top 0px
    bottom 0px
    background-color: #efeff4;
    width 100%
    height 100%
    .content
      .bonus-rule
        padding: 0.2rem 0.8rem 1rem 0.8rem;
        height: 100%
        ul
          li
            margin-top 10px
            p
              padding-top 10px
              font-size 14px
              line-height 20px
              &.text-red
                font-size 16px
                color #ef2f2f
  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(100%,0,0)
  .slide-leave-to
    transform translate3d(100%,0,0)
</style>
