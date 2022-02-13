<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  overflow: auto;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}
.van-toast{
  width: auto !important;
  min-height: 1.5rem !important;
  line-height: .28rem !important;
  font-size: .28rem !important;
}
.van-toast--text{
  padding: .2rem .4rem!important;
  font-size: .28rem!important;
}
body {
    -webkit-text-size-adjust: 100% !important;
    text-size-adjust: 100% !important;
    -moz-text-size-adjust: 100% !important;
    font-size: 10px;
}
</style>

