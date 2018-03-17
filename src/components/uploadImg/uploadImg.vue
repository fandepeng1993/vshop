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
    <!--<img :src="example.newphoto" v-if="example.newphoto" alt="">
    <button @click="finish('base64')" class="btn">预览(base64)</button>-->
    <div class="container">
      <div class="choice">选择图片</div>
      <input type="file" id="uploads" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
    </div>
    <a class="footerbox">
      <span>确认</span>
    </a>
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
          fixedBox: true,
          newphoto: ''
        }
      }
    },
    methods: {
      finish (type) {
        // 输出
        if (type === 'blob') {
          this.$refs.cropper.getCropBlob((data) => {
            /*var test = window.open('')
            test.location.href = window.URL.createObjectURL(data)*/
          })
        } else {
          this.$refs.cropper.getCropData((data) => {
           /*console.log(data)*/
            this.example.newphoto=data
          })
        }
      },
      uploadImg (e, num) {
        //上传图片
        var file = e.target.files[0]
        if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
          alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
          return false
        }
        var reader = new FileReader()
        reader.onload = (e) => {
          let data
          if (typeof e.target.result === 'object') {
            // 把Array Buffer转化为blob 如果是base64不需要
            data = window.URL.createObjectURL(new Blob([e.target.result]))
          } else {
            data = e.target.result
          }
          if (num === 1) {
            this.example.img = data
          } else if (num === 2) {
            this.example2.img = data
          }
        }
        // 转化为base64
        // reader.readAsDataURL(file)
        // 转化为blob
        reader.readAsArrayBuffer(file)
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
    .container
      position relative
      height 30px
      overflow hidden
      .choice
        position absolute
        width 100%
        text-align center
        height 100%
        line-height 30px
        font-size 18px
      #uploads
        position absolute
        opacity 0
        width 100%
        height 100%
    .footerbox
      background-color #ef2f2f
      color #fff
      height 50px
      display block
      width 100%
      line-height 50px
      font-size 20px
      position fixed
      bottom 0px
      text-align center
      &:active
        background-color #26a2ff
</style>
