<template>
  <div class="btngroup">
    <button @click.prevent.stop="decrease" :data-index="dataIndex"  :disabled="notdecre">-</button>
      <input type="number" name="number" v-model="countNum" maxlength="2" readonly>
    <button @click.prevent.stop="increase" :data-index="dataIndex" :disabled="notadd">+</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      maxNumber: {
        type: Number,
        default: 100
      },
      minNumber: {
        type: Number,
        default: 0
      },
      countNum: {
        type: Number,
        default: 1
      },
      dataIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        /* tempval: Number(this.countNum.toString().slice()) */
      }
    },
    created() {
    },
    computed: {
      notdecre() {
        return this.countNum <= this.minNumber
      },
      notadd() {
        return this.countNum >= this.maxNumber
      }
    },
    methods: {
      decrease() {
        this.$emit('decrease', this.countNum, this.dataIndex)
      },
      increase() {
        this.$emit('increase', this.countNum, this.dataIndex)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .btngroup
    overflow hidden
    display inline-block
    input
      width 27px
      height 25px
      float left
      border-top 1px solid #9d9d9d
      border-bottom 1px solid #9d9d9d
      text-align center
    button
      width 27px
      height 27px
      float left
      background none
      outline none
      border: 1px solid #9d9d9d
      font-size 17px
</style>
