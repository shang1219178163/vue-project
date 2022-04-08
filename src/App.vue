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

// // 天地失色,灰色滤镜
// html {
//   @if (1) {
//     -webkit-filter: grayscale(100%);
//     -moz-filter: grayscale(100%);
//     -ms-filter: grayscale(100%);
//     -o-filter: grayscale(100%);
//     filter: grayscale(100%);
//     filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
//   }
// }

html[theme="light"], html {
  --color: #333;
  --background: #FFF;
}

html[theme="dark"] {
  --color: #FFF;
  --background: #333;
}

html[theme="blue"] {
  --color: #5185ec;
  --background: #FFF;
}

// 天地失色,灰色滤镜
html[theme="gray"] {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
}

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

    --themeColor:#000;
    --themeBgColor:#FFF;
    //  color: var(--themeColor);
    // document.body.style.setProperty('--themeColor', '#ff0000');
}

</style>

