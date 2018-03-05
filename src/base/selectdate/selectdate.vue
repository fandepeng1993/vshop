<template>
  <mt-popup
    v-model="popupVisible"
    :modal="false"
    class="propus"
    :closeOnClickModal="false"
    position="bottom">
    <div class="header-btn">
      <a @click.prevent.stop="cancleProup">确定</a>
    </div>
    <mt-picker class="isat-picker" :showToolbar="true" :visibleItemCount="5" :itemHeight="36"
               :slots="myAddressSlots" @change="onDateChange">
      <!-- <p>地址3级联动：{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</p> -->
      <h3>请选择时间{{year}}{{month}}</h3>
    </mt-picker>
  </mt-popup>
</template>
<script type="text/ecmascript-6">
 /* import myaddress from 'common/json/address3.json' */
  export default {
    props: {
      popupVisible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        myAddressSlots: [
          {
            flex: 1,
            defaultIndex: 0,
            values: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],  // 省份数组
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            defaultIndex: 0,
            values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            className: 'slot3',
            textAlign: 'center'
          }
        ],
        year: '年',
        month: '月',
        day: '日'
      }
    },
    methods: {
      onDateChange(picker, values) {
        // 当前所有被选中的项 vlaues===['北京','市辖区', '东城区']
        // 一下index值 也是根据vlaues 下标的
//        if (myaddress[values[0]]) {  // 这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
//          // 设置values[1]
//          picker.setSlotValues(1, Object.keys(myaddress[values[0]])) // Object.keys()会返回一个数组，当前市的数组
//          // 设置values[2]
//          picker.setSlotValues(2, myaddress[values[0]][values[1]]) // 区/县数据就是一个数组
//          /* console.log(values, picker.getSlotValues(1), picker.getSlotValue(1)) */
//        }
        this.year = values[0]
        this.month = values[1]
      },
      cancleProup() {
        this.$emit('cancleProup')
      }
    },
    mounted() {
      this.$nextTick(() => { // vue里面全部加载好了再执行的函数  （类似于setTimeout）
        // 选取values[0] 中的 第几项 defaultIndex 以下标为准
        // 等价this.setSlotValue(0, '北京市')
        this.myAddressSlots[0].defaultIndex = 3
        this.myAddressSlots[2].defaultIndex = 2
        // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
        // 因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
      })
    }
  }
</script>
<style scoped rel="stylesheet/stylus" lang="stylus">
  @import "~common/stylus/mixin"
  .propus
    width 100%
    .header-btn
      border-top 1px solid #a8abb0
      border-bottom  1px solid #a8abb0
      background-color #fff
      overflow hidden
      display flex
      justify-content flex-end
      align-items center
      height 44px
      a
        color #ef2f2f
        font-size 20px
        extend-click()
        margin-right 5%
        &:active
          color #26a2ff
    .isat-picker
      background-color #cfd5da
      h3
        line-height 40px
        text-align center
        color #666666
</style>
