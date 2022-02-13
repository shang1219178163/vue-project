<template>
  <div class="body">
    <header>Header</header>
    <main>main</main>
    <footer>Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'sandwich',
  created () {},
  data () {
    return {
      msg: 'sandwich'
    }
  },
  props: {},
  methods: {}
}
</script>

<style scoped>
body {
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
}

header {
  background: lightpink;
  padding: 2rem;
}

main {
  background: coral;
    height: 100vh;

}

footer {
  background: wheat;
  padding: 2rem;
  text-align: center;
}

body {
  font-family: system-ui, sans-serif;
}

</style>
