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
        type: Object,
        default: null
      },
      listenScroll: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, 20)
      window.addEventListener('resize', () => {
        if (!this.scroll) {
          return
        }
        console.log('onresize')
        this.scroll.refresh()
      })
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        })
        if (this.listenScroll) {
          let me = this
          /* 监听滚动事件 */
          me.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
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
      scrollTo() {
        this.scroll && this.scrollTo.apply(this.scroll, arguments)
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
