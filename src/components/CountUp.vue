<template>
 <span v-text="startAt"></span>
</template>

<script>
import inViewPort from 'in-viewport'

export default {
  name      : 'count-up',
  components: {},
  props     : {
    startAt: {
      default: 0
    },
    endAt  : {},
    delay  : {
      default: 150,
    }
  },
  data () {
    return {
      interval: null,
    }
  },
  computed  : {
    count () {
      return this.startAt;
    },
    halfPoint     : function () {
      return (this.endAt / 2)
    },
    twoThirdsPoint: function () {
      return (this.endAt * 3 / 4)
    },
    increment     : function () {
      return Math.ceil(this.endAt / 25)
    }
  },
  methods   : {
    tick () {
      let nextCount = this.startAt + this.increment;
      if (nextCount >= this.endAt) {
        this.count = this.endAt;

        return clearInterval(this.interval);
      }
      if ((nextCount > this.halfPoint && nextCount < this.twoThirdsPoint) || nextCount > this.twoThirdsPoint) {
        this.increment = this.increment * 2;
      }
      return (this.startAt += this.increment);
    }
  },

  mounted () {
    inViewPort(this.$el, () => {
      let timer;
      timer = setTimeout(() => {
        console.log('in timer');
        setInterval(this.tick, 20);
        clearTimeout(timer);
      }, this.delay)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
