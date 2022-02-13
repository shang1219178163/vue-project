<template>
  <div class="box">
    <div class="contentInfo">
      <div class="box_left">
        <div class="title">Title</div>
        <div class="stats">Stats</div>
      </div>
        <div class="box_right">Content</div>
      </div>
      <div class="copyright">
        <div class="score">Score</div>
        <div class="controls">Controls</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutGrailOne',
  created () {},
  data () {
    return {
      msg: 'LayoutGrailOne'
    }
  },
  props: {},
  methods: {}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.box,
.contentInfo,
.box_left,
.copyright {
  display: grid;
}

.box {
  grid-row-gap: 10px;
  color: #fff;
}

.contentInfo,
.copyright {
  grid-template-columns: 150px 1fr;
  grid-template-rows: 400px;
  grid-column-gap: 10px;
}

.copyright {
  grid-template-rows: 60px;
}

.box_left {
  grid-template-rows: 40px 1fr;
  grid-row-gap: 10px;
}

.title,
.stats,
.box_right,
.score,
.controls {
  background-color: #7AB8ED;
}
</style>
