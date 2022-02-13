<template>
  <div class="body">
    <div class="parent">
      <div class="child">1</div>
      <div class="child">2</div>
      <div class="child">3</div>
      <div class="child">4</div>
      <div class="child">5</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Line',
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
.parent {
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
}

.child {
  flex: 0 1 100px;
  border: 1px solid red;
  background: lightpink;
  font-size: 2rem;
  text-align: center;
}

body {
  font-family: system-ui, serif;
}
</style>
