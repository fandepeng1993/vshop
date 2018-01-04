<template>
  <div class="recommend">
    <div class="recommend-top">
      <ul>
        <li v-for="item in recommend.toppng">
          <a>
            <img v-lazy="item">
          </a>
        </li>
      </ul>
    </div>
    <div class="recommoned-bot">
      <ul>
        <li v-for="item in recommend.botpng">
          <a>
            <img v-lazy="item">
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      recommend:{
        type: Object,
        default: {}
      }
    },
    data() {
      return{}
    },
    methods: {
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recommend
    .recommend-top,.recommoned-bot
      overflow hidden
      ul
        display flex
        background #f0f0f0
        justify-content:space-around
        li
          flex 1
          width 33%
          a
            display block
            overflow hidden
            text-align center
            img
              width 100%
              display block
              vertical-align middle
              height auto


</style>
