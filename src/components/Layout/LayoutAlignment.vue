<template>
  <div>
    <div class="parent" >
      <div class="child" contenteditable>:)</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alignment',
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
  display: grid;
  /* place-items: <align-items> <justify-items>; */
  place-items: center;

  background: lightblue;
  width: 500px;
  height: 500px;

  resize: both;
  overflow: auto;
}

.child {
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid red;
  background: lightpink;
  font-size: 2rem;
  text-align: center;
}

body {
  font-family: system-ui, serif;
}

</style>
