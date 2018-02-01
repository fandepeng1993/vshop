<template>
  <div class="recommend">
    <div class="recommend-top">
      <ul>
        <li  v-for="item in recommend.toppng" @click.prevent.stop="jumppage(item)">
          <a>
            <img width="100%" :height="screenWidth*0.33*0.556"  v-lazy="item.imgurl">
          </a>
        </li>
      </ul>
    </div>
    <div class="recommoned-bot">
      <ul>
        <li v-for="item in recommend.botpng" @click.prevent.stop="jumppage(item)">
          <a>
            <img width="100%" :height="screenWidth*0.5*0.525" v-lazy="item.imgurl">
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  export default {
    props: {
      recommend: {
        type: Object,
        default: {}
      },
      screenWidth: {
        type: Number,
        default: 0
      }
    },
    mounted() {
    },
    data() {
      return {}
    },
    methods: {
      jumppage(item) {
        this.setTitlesname(item.name)
        this.$router.push({
          path: '/Groupgoods/' + item.id
        })
      },
      ...mapMutations({
        setTitlesname: 'SET_TITLESNAME'
      })
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
              vertical-align middle


</style>
