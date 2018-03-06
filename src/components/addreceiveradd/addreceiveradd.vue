<template>
  <transition name="slide">
    <div class="membershipcard">
      <isat-publictoptitle :isback="false" :defaultHome="'/Membercenter'" :titles="titlesname"></isat-publictoptitle>
      <ul>
        <li v-for="item in contentInfo">
          <p>
            <span>{{item.textinfo}}</span>
            <input type="text" v-if="item.type === 'input'">
          </p>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  export default {
    data() {
      return {
        titlesname: '添加收货地址',
        contentInfo: [
          {textinfo:'收货人', type: 'input'},
          {textinfo:'联系电话', type: 'input'},
          {textinfo:'所在地区', type: 'input'},
        ]
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
  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(100%,0,0)
  .slide-leave-to
    transform translate3d(100%,0,0)
</style>
