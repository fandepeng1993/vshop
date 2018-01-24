<template>
  <div class="shopInfo" style="height: 2150px">
    <p v-for="item in imgs">
      <img :src="item.imgurl" alt="">
    </p>
  </div>

</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      imgs: [
        {imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201707/2808115149.jpg'},
        {imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2712260552.jpg'},
        {imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2712324829.jpg'},
        {imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2712374345.jpg'},
        {imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2713065484.jpg'},
        {imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2713114923.jpg'},
        {imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2713165730.jpg'},
        {imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2713313316.jpg'},
        {imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2713370897.jpg'},
        {imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2713325658.jpg'},
        {imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2713465179.jpg'},
        {imgurl: 'http://file.jjiehao.com//files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2713513557.jpg'}
      ]
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .shopInfo
    padding 10px
    p
      img
        width 100%

</style>
