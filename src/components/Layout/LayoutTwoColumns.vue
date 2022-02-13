<template>
  <div class="conainer">
    <div class="sidebar" contenteditable>
      Min: 150px
      <!-- <br/> -->
      Max: 25%
    </div>
    <p class="content" contenteditable>
      {{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'TwoColumns',
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
.conainer {
  display: grid;
  grid-template-columns: minmax(100px, 25%) 1fr;
  padding: 0;
  margin: 0;
}

.sidebar {
  height: 100vh;
  background: lightpink;
  font-size: 2rem;
  text-align: center;
}

.content {
  padding: 2rem;
}

body {
  font-family: system-ui, serif;
}

</style>
