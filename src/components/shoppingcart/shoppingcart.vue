<template>
  <div class="shoppingcart">
    <isat-publictoptitle :home="false" :titles="Goodstitle"></isat-publictoptitle>
    <scroll class="shoppingcart-content" ref="shopScroll">
        <div>
          <div class="shopTop" ref="topsbox" data-fdp="fdp">
            <i :class="{'on': isallchecked}" @click.prevent.stop="allchecked"></i>
            <h3>知硒堂商城</h3>
            <span :style="changeImg" @click.prevent.stop="changeEdit">{{edittext}}</span>
            <!--<span :style="{backgroundImage:'url(../../common/images/'+ noimg +'.png)'}" @click.prevent.stop="changeEdit">{{edittext}}</span>-->
          </div>
          <ul class="shopUl">
            <li v-for="(item,index) in shopArray" >
              <i :class="{'on': tempchecked[index]}" @click.prevent.stop="checkThis(index)"></i>
             <!-- {{tempchecked[index]}}-->
              <img @load="loadLast(index)" :src="imageDomainName+item.imgurl">
              <div class="h3">
                <h4>{{item.name}}</h4>
                <span><i>¥</i>{{item.price.toFixed(2)}}</span>
                <isat-numberoption
                  :dataIndex="index"
                  @increase="increase"
                  @decrease="decrease"
                  :maxNumber="item.stock"
                  :minNumber="1"
                  :countNum="item.haschoiceNumber"></isat-numberoption>
              </div>
              <transition name="slide-fade">
                <div class="deleteBtn" v-show="isEdit" @click.prevent.stop="deleteThis(index)">
                    <span >删除</span>
                </div>
              </transition>
            </li>
          </ul>
        </div>
    </scroll>
    <div class="finishCount">
      <ul class="finishCountul">
        <li class="allchecked" @click.prevent.stop="allchecked">
            <i :class="{'on': isallchecked}"></i>
            <span>全选</span>
        </li>
        <li class="allcount">
          <transition name="slide-fade">
            <div v-show="!isEdit">
              <i>合计：</i>
              <span>¥<b>{{allprice.toFixed(2)}}</b></span>
            </div>
          </transition>
        </li>
        <li class="jiesuan" @click="sss">
          <span>{{isdelete}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import Scroll from 'base/scroll/scroll'
  import IsatNumberoption from 'base/numberoption/numberoption'
  import {mapGetters, mapMutations} from 'vuex'
  import {imageDomainName} from 'api/config'
  import {getShopCarList, removeShopCarInfo} from 'api/getdata'
  export default {
    data() {
      return {
        Goodstitle: '购物车',
        shopArray: [],
        imageDomainName:imageDomainName,
        pageNo: 1,
        pageSize: 10,
        shopgoods: [],
        isEdit: false,
        tempchecked: [],
        isallchecked: false
      }
    },
    created() {
       /* console.log(this.$route, this.$router) */
      /* console.log(this) */
      this.setInitcheckstate()
      this._getShopCarList()
      /* this.setCheckedstate(this.tempchecked) */
    },
    mounted() {
//        console.log(this.$refs.topsbox.children)
       /* console.log(this.$attrs)
        console.log(this.$route) */
       /* console.log(this.checkedstate) */
    },
    computed: {
      allprice() {
        var temp = 0
        for (let i in this.shopArray) {
          if (!this.tempchecked[i]) {
            continue
          }
          temp += this.shopArray[i].price * this.shopArray[i].haschoiceNumber
        }
        return temp
      },
      edittext() {
        return this.isEdit ? '完成' : '编辑'
      },
      noimg() {
        return this.isEdit ? 'complete' : 'edit'
      },
      changeImg () {
        return {
          backgroundImage: 'url(' + require('../../common/images/' + this.noimg + '.png') + ')'
        }
      },
      isdelete() {
        return this.isEdit ? '删除' : '结算'
      },
      ...mapGetters([
        /* ' checkedstate' */
      ])
    },
    methods: {
      //取数据，并放入购物车数组中。
      _getShopCarList() {
        let params = {}
        params.pageNo = this.pageNo;
        params.pageSize = this.pageSize;
        getShopCarList(params).then((res) => {
          if (res.ret === '0') {
            let arr = res.data.list
            this.shopArray = []
            for(let i=0; i<arr.length; i++) {
              let obj = {};
              obj.id = arr[i].id
              obj.name = arr[i].item.name
              obj.imgurl = arr[i].item.photo
              obj.price = arr[i].item.currentPrice/100
              obj.haschoiceNumber = arr[i].itemNum
              obj.stock = arr[i].item.storage
              this.shopArray.push(obj);
            }
          }
        })
      },
      allchecked() {
        if (this.isallchecked) {
          this.setInitcheckstate()
        } else {
          this.allcheckedstate()
        }
      },
      increase(tempval, index) {
        this.shopArray[index].haschoiceNumber = tempval + 1
      },
      decrease(tempval, index) {
        this.shopArray[index].haschoiceNumber = tempval - 1
      },
      sss() {
        //console.log(this.isEdit, this.shopArray)
        if(this.isEdit) {
          let deleteIds = ""
          let deleteIdArr = []
          let deleteIndexArr = []
          for(let i=this.tempchecked.length-1; i>=0; i--) {
            if(this.tempchecked[i]) {
              let deleteShopCarInfo = this.shopArray[i]
              deleteIdArr.push(deleteShopCarInfo.id)
              deleteIndexArr.push(i)
            }
          }

          for(let i=0; i<deleteIdArr.length; i++) {
            deleteIds = deleteIds + deleteIdArr[i] + ","
          }

          if(deleteIds != "") {
            deleteIds = deleteIds.substring(0,deleteIds.length-1)
          }

          //批量删除
          console.log("批量删除=" + deleteIds)
          this.deleteByIds(deleteIds, deleteIndexArr)
        } else {
          //结算
          this.$router.push({
            path: '/orderconfirm'
          })
        }
      },
      changeEdit() {
        this.isEdit = !this.isEdit
      },
      checkThis(index) {
        this.tempchecked.splice(index, 1, !this.tempchecked[index])
      },
      //删除单个购物车信息
      deleteThis(index) {
        let deleteIds = ""
        let deleteIndexArr = []
        let deleteShopCarInfo = this.shopArray[index]
        deleteIndexArr.push(index)
        if(deleteShopCarInfo != null) {
          deleteIds = deleteShopCarInfo.id
          console.log("删除单个="+deleteIds)
          this.deleteByIds(deleteIds, deleteIndexArr)
        }
      },
      deleteByIds(ids, deleteIndexArr) {
        console.log("deleteByIds==" + ids)
        //执行删除
        removeShopCarInfo(ids).then((res) => {
          if (res.ret === '0') {
            alert(res.retMsg)
            //界面数据上执行删除
            for(let i=0; i<deleteIndexArr.length; i++) {
              console.log(deleteIndexArr[i])
              this.shopArray.splice(deleteIndexArr[i], 1)
              this.tempchecked.splice(deleteIndexArr[i], 1)
            }
          }
        })
      },
      setInitcheckstate() {
        for (let i in this.shopArray) {
          this.tempchecked.splice(i, 1, false)
        }
      },
      allcheckedstate() {
        for (let i in this.shopArray) {
          this.tempchecked.splice(i, 1, true)
        }
      },
      loadLast(index) {
        if (index >= this.shopArray.length - 1) {
          this.$refs.shopScroll.refresh()
        }
      },
      ...mapMutations({
        // 修改state，单个修togglePlaying改
       /* changeCheckedstate: 'CHANGE_CHECKEDSTATE',
        setCheckedstate: 'SET_CHECKEDSTATE' */
      })
    },
    components: {
      IsatPublictoptitle,
      Scroll,
      IsatNumberoption
    },
    watch: {
      tempchecked(newval) {
        if (newval.indexOf(false) >= 0) {
          this.isallchecked = false
          return
        }
        this.isallchecked = true
      },
      '$route': function () {
        this._getShopCarList()
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .shoppingcart
    .shoppingcart-content
      position fixed
      top 40px
      bottom 0px
      height calc(100% - 95px)
      width 100%
      overflow hidden
      z-index 105
      background #fafafa
      .shopTop
        display flex
        padding 15px
        background-color #fff
        i
          width 17px
          height 17px
          border-radius 50%
          border 1px solid #e1e1e2
          &.on
            background-image url('../../common/images/add1.png');
            background-color  #ef2f2f;
            background-repeat  no-repeat;
            background-size 10px 10px
            background-position center;
            border: 1px solid #ef2f2f;
        h3
          padding-left 20px
          background-image url("../../common/images/shop.jpg")
          background-repeat no-repeat
          background-size 20px 20px
          background-position left top
          line-height 20px
          flex 4
          margin-left 20px
          font-size 14px
        span
          line-height 20px
          flex 1
          padding-left 25px
          /*background-image url("../../common/images/complete.png")*/
          background-repeat no-repeat
          background-size 18px 18px
          background-position 0 1px
          font-size 14px
      .shopUl
        li
          background #fafafa
          border-bottom 5px solid #fff
          display flex
          justify-content space-between
          align-items center
          i
            width 17px
            height 17px
            border-radius 50%
            border 1px solid #e1e1e2
            margin  0px 5px 0px 15px
            extend-click()
            &.on
              background-image url('../../common/images/add1.png');
              background-color  #ef2f2f;
              background-repeat  no-repeat;
              background-size 10px 10px
              background-position center;
              border: 1px solid #ef2f2f;
          img
            width 20%
            height auto
            margin 10px 10px
          .h3
            flex 1
            align-self stretch
            padding 10px 5px 10px 0px
            no-wrap()
            display flex
            flex-wrap wrap
            align-items center
            h4
              width 100%
              font-size 15px
              no-wrap()
            span
              color #ef2f2f
              font-size 17px
              no-wrap()
              display inline-block
              width 50%
              i
                border none
                font-style normal
                margin 0
          .deleteBtn
            align-self stretch
            display flex
            align-items center
            background-color #ef2f2f
            color white
            span
              width 48px
              text-align center
              overflow hidden
              white-space nowrap
    .finishCount
      position fixed
      height 55px
      background #fff
      border-top: 1px solid #bfbfbf
      z-index 105
      bottom 0px
      width 100%
      .finishCountul
        display flex
        height 55px
        align-items stretch
        li
          flex 1
          display flex
          text-align center
          align-items center
          justify-content center
          &.jiesuan
            border-top: 1px solid #bfbfbf;
            color white
            background: #ef2f2f;
          &.allcount
            flex 2
            no-wrap()
            display inline-block
            line-height: 55px
            i
              color #4d4d4d
              font-style normal
            span
              color #ef2f2f
              font-size 20px
          &.allchecked
            margin 0px
            color #999
            justify-content space-around
            i
              width 17px
              height 17px
              border-radius 50%
              border 1px solid #e1e1e2
              &.on
                background-image url('../../common/images/add1.png');
                background-color  #ef2f2f;
                background-repeat  no-repeat;
                background-size 10px 10px
                background-position center;
                border: 1px solid #ef2f2f;

.slide-fade-enter-active
  transition: all .3s ease;
.slide-fade-leave-active
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(100%)
</style>
