<template>
 <div ref="wrapper">
   <slot></slot>
 </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      datas: {
        type: Object | String | Array,
        default: null
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      resizePolling: {
        type: Number,
        default: 60
      },
      pullup: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          resizePolling: this.resizePolling,
          click: this.click,
          scrollY: true // 因为scrollY默认为true，其实可以省略
        })
        if (this.listenScroll) {
          let me = this
          /* 监听滚动事件 */
          me.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
        }
        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
            /* this.scroll.maxScrollY
            scrollEnd：是滚动松开手指结束的时候
            * 表示的是滚动元素总体高度-外边承包框显示区域的高度
            * +50代表loading 缓冲区
            * */
             /* console.log(this.scroll.y, this.scroll.maxScrollY) */
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              // 表示滚动到底部
              this.$emit('scrollToEnd')
            }
          })
        }
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo: function () {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      datas() {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
