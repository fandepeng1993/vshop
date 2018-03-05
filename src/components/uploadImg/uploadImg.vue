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
    <div class="test-button">
      <button @click="changeImg" class="btn">changeImg</button>
      <label class="btn" for="uploads">upload</label>
      <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
      <button @click="startCrop" v-if="!crap" class="btn">start</button>
      <button @click="stopCrop" v-else class="btn">stop</button>
      <button @click="clearCrop" class="btn">clear</button>
      <button @click="refreshCrop" class="btn">refresh</button>
      <button @click="changeScale(1)" class="btn">+</button>
      <button @click="changeScale(-1)" class="btn">-</button>
      <button @click="rotateLeft" class="btn">rotateLeft</button>
      <button @click="rotateRight" class="btn">rotateRight</button>
      <button @click="finish('base64')" class="btn">preview(base64)</button>
      <button @click="finish('blob')" class="btn">preview(blob)</button>
      <a @click="down('base64')" class="btn">download(base64)</a>
      <a @click="down('blob')" class="btn">download(blob)</a>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import $ from 'jquery'
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
