<template>
    <div class="isatstar">
      <div class="leftcon">{{leftText}}：</div>
      <div class="iconstar">
        <i class="icon-star" v-for="(item,index) in starList" :class="item" @click.prevent.stop="tapstar(index+1)"></i>
      </div>
      <div class="rightcon">{{deepstation}}</div>
    </div>
</template>

<script>
  const starLen = 5
  export default {
    name: "iconstar",
    props: {
      starNumber: {
        type: Number,
        default: 0
      },
      leftText: {
        type: String,
        default: '评价内容'
      }
    },
    data() {
      return {
        stars: this.starNumber
      }
    },
    created() {
     /* console.log(this.starList) */
    },
    methods: {
      tapstar(index) {
        this.stars = index
       /* console.log(this.starList) */
      }
    },
    computed: {
      starList() {
        var temp = []
        if (this.stars <= 0) {
          for (var i = 0; i < starLen; i++) {
            temp[i] = ''
          }
        } else if (this.stars <= starLen) {
          for (var j = 0; j < starLen; j++) {
            if (j < this.stars) {
              temp[j] = 'active'
            } else {
              temp[j] = ''
            }
          }
        } else {
          this.stars = starLen
        }
        return temp
      },
      deepstation() {
        if (this.starList) {
          var tempdeep = 0
          for (var z = 0; z < this.starList.length; z++) {
            if (this.starList[z] === 'active') {
              tempdeep++
            } else {
              continue
            }
          }
          if (tempdeep <= 2) {
            return '差'
          } else if (tempdeep === 3) {
            return '一般'
          } else if (tempdeep === 4) {
            return '满意'
          } else if (tempdeep === 5) {
            return '非常满意'
          }
        } else {
          return '差'
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .isatstar
    display flex
    align-items center
    justify-content space-between
    padding 5px 10px
    .leftcon
      width 5em
      text-align justify
      text-align-last:justify
      color #333
      font-size 15px
    .rightcon
      width 4em
      text-align right
      /*text-align-last:justify*/
      color #8a8a8a
     /* &:after
        content ''
        height 0
        display: inline-block
        width:100%
        overflow:hidden*/
    .iconstar
      display flex
      width calc(100% - 10em)
      justify-content space-between
      .icon-star
        font-size 24px
        color #e3e3e3
        &.active
          color #5ca7d9
</style>
