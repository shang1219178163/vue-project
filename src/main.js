import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 导入所有组件
import Vant from 'vant'
import 'vant/lib/index.css'

import store from '@/store' // short for @/store/index

import * as utils from './lib/utils'

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


app.use(router)
.use(store)
.use(Vant)
.use(iosAlertSheet)
.mount('#app')
