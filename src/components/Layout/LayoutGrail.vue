<template>
  <div class="conainer">
    <header><h1 contenteditable>Header.com</h1></header>
    <div class="left-sidebar" contenteditable>Left Sidebar</div>
    <main contenteditable></main>
    <div class="right-sidebar" contenteditable>Right Sidebar</div>
    <footer contenteditable>Footer Content — Header.com 2020</footer>
  </div>
</template>

<script>
export default {
  name: 'Grail',
  created () {},
  data () {
    return {
      msg: ''
    }
  },
  props: {},
  methods: {}
}
</script>

<style scoped>
.conainer {
  display: grid;
  height: 100vh;
  /* grid-template: auto 1fr auto / auto 1fr auto */
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto 1fr auto;
}

header {
  grid-column: 1 / 4;
  background: lightpink;
  padding: 2rem;
}

.left-sidebar {
  grid-column: 1 / 2;
  background: lightblue;
}

main {
  grid-column: 2 / 3;
  background: coral;
}

.right-sidebar {
  grid-column: 3 / 4;
  background: yellow;
}

footer {
  grid-column: 1 / 4;
  background: wheat;
  padding: 2rem;
  text-align: center;
}

body {
  font-family: system-ui, sans-serif;
}

.left-sidebar,
.right-sidebar {
  padding: 1rem;
}

</style>
