<template>
  <div class="box">
    <div class="middle-wrap">
      <div class="middle"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'ThreeColumns',
  created () {},
  data () {
    return {
      msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla architecto maxime modi nisi. Quas saepe dolorum, architecto quia fugit nulla! Natus, iure eveniet ex iusto tempora animi quibusdam porro?'
    }
  },
  props: {},
  methods: {}
}
</script>

<style scoped>
.box {
  position: relative;
  height: 100vh;
}
.middle-wrap {
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
}
.middle-wrap .middle {
  height: 100%;
  margin: 0 100px; /*留出距离*/
  background-color: yellow;
}
.left {
  float: left;
  width: 100px;
  margin-left: -100%;
  height: 100%;
  background-color: red;
}
.right {
  float: left;
  width: 100px;
  height: 100%;
  margin-left: -100px;
  background-color: green;
}

</style>
