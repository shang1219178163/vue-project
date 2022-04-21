<template>
  <!-- <ConfigProviderProps :theme-vars="themeVars"> -->
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.name" />
      </keep-alive>
    </router-view>
  <!-- </ConfigProviderProps> -->
</template>

<script>
import { Toast, ConfigProviderProps, Dialog } from 'vant';

export default {
  name: 'App',
  components: {
    
  },
  // data() {
    // let themeColor = getComputedStyle(document.body).getPropertyValue('--theme-color') || '#BE965A';
    // console.log({themeColor});
    // return {
    //   themeVars: {
    //       rateIconFullColor: "red",
    //       sliderBarHeight: '4px',
    //       sliderButtonWidth: '20px',
    //       sliderButtonHeight: '20px',
    //       sliderActiveBackgroundColor: themeColor,
    //       buttonPrimaryBorderColor: themeColor,
    //       buttonPrimaryBackgroundColor: themeColor,
    //       dialogConfirmButtonTextColor: themeColor,
    //   }
    // }
  // },
  // computed: {
    // themeColor() {
    //   return getComputedStyle(document.body).getPropertyValue('--theme-color');
    // }
  // },
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
  // width: auto !important;
  min-height: 24px !important;
  // max-width: 80% !important;
  line-height: .28rem !important;
  font-size: .28rem !important;
}

.van-toast--text{
  padding: .2rem .3rem !important;
  font-size: .28rem !important;
}

body {
    -webkit-text-size-adjust: 100% !important;
    text-size-adjust: 100% !important;
    -moz-text-size-adjust: 100% !important;
    font-size: 10px;

    // 主题颜色
    --theme-color:#0082e0;
    --theme-color:#BE965A;
    // 全局背景色
    --bg-color:#F6F6F6;
    //  color: var(--themeColor);
    // document.body.style.setProperty('--themeColor', '#ff0000');
}

</style>

