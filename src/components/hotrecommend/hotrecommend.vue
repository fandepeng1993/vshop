<template>
  <div class="recommend">
    <div class="recommend-top">
      <ul>
        <li v-for="item in toppng">
          <a>
            <img v-lazy="item">
          </a>
        </li>
      </ul>
    </div>
    <div class="recommoned-bot">
      <ul>
        <li v-for="item in botpng">
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
    data() {
      return {
        toppng: ['http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/2118160835.jpg', 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/2118162353.jpg', 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201710/2118163154.jpg'],
        botpng: ['http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201708/2110375767.jpg', 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201708/2110155752.jpg']
      }
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
