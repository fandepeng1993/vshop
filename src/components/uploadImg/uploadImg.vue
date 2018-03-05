<template>
  <div class="uploadimg">
    <isat-publictoptitle
      :titles="'修改头像'"
    ></isat-publictoptitle>
    <div class="wrapper">
      <vueCropper
        ref="cropper"
        :img="example.img"
        :autoCrop="example.autoCrop"
        :autoCropWidth="example.autoCropWidth"
        :autoCropHeight="example.autoCropHeight"
        :fixedBox="example.fixedBox"
      ></vueCropper>
    </div>

    </div>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import vueCropper from 'vue-cropper'
  export default {
    data () {
      return {
        example: {
          img: 'http://ofyaji162.bkt.clouddn.com/bg1.jpg',
          autoCrop: true,
          autoCropWidth: 150,
          autoCropHeight: 150,
          fixedBox: true
        }
      }
    },
    components: {
      IsatPublictoptitle,
      vueCropper
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .uploadimg
    position fixed
    width 100%
    height 100%
    top 0px
    bottom 0px
    overflow hidden
    background-color #fff
    .wrapper
      width 100%
      height 300px
</style>
