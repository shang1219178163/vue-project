import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import plugins from './plugins';
import VueDT from './router/DataTracking.js';
// 导入所有组件
import Vant, {Toast, Lazyload, ConfigProvider, ImagePreview} from 'vant';
import 'vant/lib/index.css';

import store from '@/store'; // short for @/store/index

import * as utils from './utils/common';
import directives from './utils/directives';

import iosAlertSheet from './components/iosAlertSheet';
import * as LOG from '@/utils/log';

import '@/plugins/remSelf';

import platformMixin from '@/mixin/platformMixin';

import MyUI from '@/lib/MyUI';
import VToast from "@/components/VToast";
// import * as vtoastOne from "@/components/VToastOne";
// import * as vtoast from '@/components/VToast';

import VSheetPhone from "@/components/VSheetPhone";


const isProd = process.env.NODE_ENV === 'production'
if (!isProd) {
  import('./lib/vconsole');
}

const app = createApp(App);
///添加全局方法
app.config.globalProperties.$log = LOG;
// app.config.globalProperties.$vtoast = vtoast;
// app.config.globalProperties.$vtoastOne = vtoastOne;

app.config.globalProperties.utils = utils;
///添加全局实例
app.config.globalProperties.user = {
    name: "zhangshan",
    token: "asdfsadfasdf32342342",
    uid: "sdfasdfasdfwe2342dsds"
};
// 注册全局自定义指令

/// 仅在 mounted 和 updated 时触发相同行为
app.directive("font-size", (el, binding, vnode) => {
    // console.log('font-sizeo', binding)
    var size = 16;
    switch (binding.arg || binding.value) {
    case "small":
        size = 12;
        break;
    case "large":
        size = 24;
        break;
    case "huge":
        size = 34;
        break;
    default:
        size = 16;
        break;
    }
    el.style.fontSize = size + "px";
});

app.directive('demo', (el, binding) => {
  // console.log('demo', binding)
})

app.use(router)
.use(store)
.use(VueDT)
.use(plugins)
.use(Vant)
.use(Lazyload)
.use(ImagePreview)
.use(iosAlertSheet)
.use(directives)
.use(VToast)
.use(VSheetPhone)

.mixin(MyUI)
.mixin(platformMixin)

.mount('#app')
