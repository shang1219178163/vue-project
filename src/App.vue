<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive v-if="canKeepAlive(route)" >
      <component :is="Component" :key="route.name" />
    </keep-alive>
    <component v-else :is="Component" :key="route.name" />
  </router-view>
</template>

<script>
import { provide, } from 'vue';
import { useInject } from '@/utils/use/useInject';

export default {
  name: 'App',
  // data() {
  // },
  // computed: {

  // },
  methods: {
    // 是否缓存页面
    canKeepAlive(route) {
      const result = route.meta?.keepAlive ?? true;
      console.log("route:", route.name, result);
      return result;
    }
  },
}
</script>



<style lang="scss">
//以便与Flutter模型一致.
* { box-sizing: border-box; }

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

body {
  // height: 100%;
  // height: calc(100% - constant(safe-area-inset-bottom));
  // height: calc(100% - env(safe-area-inset-bottom));

  // padding-bottom: constant(safe-area-inset-bottom);
  // padding-bottom: env(safe-area-inset-bottom);

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

.van-button{
  --van-button-primary-background-color: var(--theme-color);	
  --van-button-primary-border-color: var(--theme-color);
}

.van-checkbox{
  --van-checkbox-checked-icon-color: var(--theme-color);	
}

.van-overlay{
  --van-overlay-background-color:	rgba(0, 0, 0, 0.5);	
}

.van-toast {
  --van-toast-max-width: 70%;
  --van-toast-text-padding: 0.24rem 0.4rem;
  --van-toast-font-size: 0.34rem;
  --van-toast-line-height: 0.44rem;
}

.van-dialog {
  --van-dialog-header-font-weight: 400;
  --van-dialog-has-title-message-text-color: #666666;	
  --van-dialog-confirm-button-text-color: var(--theme-color);
}

.van-dialog__header {
  color: #333333;
}

.van-tabs{
  --van-tab-font-size: 0.34rem;
  --van-tab-active-text-color:#333333;
  --van-tab-text-color: #999999;	
  --van-tabs-bottom-bar-color: var(--theme-color);
  font-family: PingFangSC-Medium;
  font-weight: 500;

  // &__line{
  //   bottom: 19px !important;
  // }
}

.van-picker__confirm {
  --van-picker-confirm-action-color: var(--theme-color);
}

// .van-picker__cancel {

// }



</style>

