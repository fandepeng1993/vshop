<template>
  <mt-popup
    v-model="popupVisible"
    :modal="false"
    class="propus"
    :closeOnClickModal="false"
    position="bottom">
    <isat-event-calendar :panelState="popupVisible" @getselectdate="selectdate" ></isat-event-calendar>
  </mt-popup>

</template>

<script type="text/ecmascript-6">
  import IsatEventCalendar from 'base/calendar/calendar'
  export default {
    props: {
      popupVisible: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        demoEvents: [{
          date: '2018/2/15',
          title: 'eat',
          desc: 'longlonglong description'
        }, {
          date: '2018/2/12',
          title: 'this is a title'
        }]
      }
    },
    methods: {
      selectdate(index, date) {
        this.$emit('cancleProup', index, date)
      }
    },
    components: {
      IsatEventCalendar
    }
  }
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  @import "~common/stylus/mixin"
  .propus
    width 100%
</style>
