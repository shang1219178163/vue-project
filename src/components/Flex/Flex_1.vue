<template>
  <div>
    <!-- <div v-for="e in list" :key="e">
        <div class="box-cell">{{e}}/{{list.length}}</div>
    </div> -->
    <div class="box">
        <div class="box-cell">1/6</div>
        <div class="box-cell">2/6</div>
        <div class="box-cell">3/6</div>
        <div class="box-cell">4/6</div>
        <div class="box-cell">5/6</div>
        <div class="box-cell">6/6</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'flex_1',
  created () {},
  data () {
    return {
      msg: 'flexDemo',
      list: [0, 1, 2, 3, 4, 5]
    }
  },
  props: {},
  methods: {}
}
</script>

<style scoped>
div{
  border: 0.3px solid blue;
}
.box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.box-cell {
  /* box-grow: 1; */
  width: 80px;
}
</style>
