<template>
  <div class="integrationinfoList">
   <scroll class="content-scroll">
     <ul class="content-ul">
       <li class="case" v-for="item in scoreInfoList">
         <h3>
           <span>{{item.fromType}}</span>
           <span>{{item.type == "0" ? "" : "+"}}{{item.score}}</span>
         </h3>
         <p>
           <span>{{item.type == "0" ? "消耗" : "增加"}}</span>
           <span >{{item.createDate}}</span>
         </p>
       </li>
     </ul>
   </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import {imageDomainName} from 'api/config'
  import {getScoreInfoList} from 'api/getdata'
  export default {
    data() {
      return {
        id: "1",
        scoreInfoList: [],
        pageNo: 1,
        pageSize: 10,
        beginCreateDate: null,
        endCreateDate: null
      }
    },
    created() {
      this.id = this.$route.params.id;
      this._getScoreInfoList()
    },
    methods: {
      _getScoreInfoList() {
        let params = {}
        params.pageNo = this.pageNo;
        params.pageSize = this.pageSize;

        if(this.beginCreateDate != null && this.endCreateDate != null) {
          params.beginCreateDate = this.beginCreateDate
          params.endCreateDate = this.endCreateDate
        }

        if(this.id == "2") {
          //增加
          params.type = "1"
        } else if(this.id == "3") {
          //消耗
          params.type = "0"
        }

        getScoreInfoList(params).then((res) => {
          if (res.ret === '0') {
            this.scoreInfoList = res.data.list
          }
        })
      }
    },
    components: {
      Scroll
    },
    watch: {
      '$route': function () {
        if(this.$route.fullPath.indexOf("integrationinfo") != -1) {
          this.id = this.$route.params.id;
          this._getScoreInfoList()
        }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet">
  @import "~common/stylus/mixin"
  .integrationinfoList
    width 100%
    height calc(100% - 208px)
    overflow hidden
    position absolute
    .content-scroll
      overflow hidden
      width 100%
      height 100%
      .content-ul
        .case
          padding 16px 11px
          border 1px solid #f3f3f3
          h3
            display flex
            justify-content space-between
            align-items center
            margin-bottom 10px
          p
            display flex
            justify-content space-between
            align-items center
            font-size 10px
            color #999999

</style>
