<template>
  <div class="incomeIndetail">
    <scroll class="incomeIndetailscroll">
      <ul v-show="bountyInfoList.length > 0">
        <!-- <li v-for="n in 15" style="line-height: 30px">{{n.toString()}}</li> -->
        <li class="case" v-for="item in bountyInfoList">
           <h3>
             <span>{{item.fromType}}</span>
             <span>{{item.type == "0" ? "" : "+"}}{{(item.price/100).toFixed(2)}}</span>
           </h3>
           <p>
             <span>{{item.type == "0" ? "支出" : "收入"}}</span>
             <span >{{item.createDate}}</span>
           </p>
        </li>
      </ul>
      <div v-show="bountyInfoList.length == 0" class="hasNodata">
        <img src="../../common/images/nodata.png" alt="">
        <p>您暂时没有数据</p>
      </div>
    </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import {imageDomainName} from 'api/config'
  import {getBountyInfoList} from 'api/getdata'

  export default {
    data() {
      return {
        id: "all",
        bountyInfoList: [],
        pageNo: 1,
        pageSize: 10
      }
    },
    created() {
      this.id = this.$route.params.id;
      this._getBountyInfoList()
    },
    methods: {
      _getBountyInfoList() {
        let params = {}
        params.pageNo = this.pageNo;
        params.pageSize = this.pageSize;

        if(this.id == "income") {
          //增加
          params.type = "1"
        } else if(this.id == "expenditure") {
          //消耗
          params.type = "0"
        }

        getBountyInfoList(params).then((res) => {
          if (res.ret === '0') {
            this.bountyInfoList = res.data.list
          }
        })
      }
    },
    components: {
      Scroll
    },
    watch: {
      '$route': function () {
        this.id = this.$route.params.id;
        this._getBountyInfoList()
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .incomeIndetail
    overflow hidden
    height calc( 100% - 225px)
    width 100%
    background-color #f5f4f3
    .incomeIndetailscroll
      overflow hidden
      height 100%
      width 100%
      .hasNodata
        text-align center
        background-color #fff
        padding-bottom 30px
        color #999
        img
          width 37px
          margin 30px auto
</style>
