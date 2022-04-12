import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMD from './router/eventTracking.js'
// 导入所有组件
import Vant, {Lazyload, ConfigProvider} from 'vant'
import 'vant/lib/index.css'

import store from '@/store' // short for @/store/index

import * as utils from './utils/common'
import Directives from './utils/directives'

import iosAlertSheet from './components/iosAlertSheet'

const app = createApp(App)

///添加全局方法
app.config.globalProperties.utils = utils
///添加全局实例
app.config.globalProperties.user = {
    name: "zhangshan",
    token: "asdfsadfasdf32342342",
    uid: "sdfasdfasdfwe2342dsds"
}

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
.use(VueMD)
.use(store)
.use(Vant)
// .use(Lazyload)
.use(ConfigProvider)
.use(iosAlertSheet)
.use(Directives)
.mount('#app')
