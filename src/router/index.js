import { createRouter, createWebHashHistory } from 'vue-router'

import { routers } from './routes'

const router = createRouter({
   // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
   history: createWebHashHistory(),
   routes: routers,
   // scrollBehavior(to, from, savedPosition) {
   //    // 始终滚动到顶部
   //    return { top: 0 }
   // }
})

// router.afterEach((to, from, next) => {
//    //页面埋点
//    // console.log("afterEach", from, "=>", to)
//    // alert("beforeEach", from, "=>", to)
//    next()
// });

export default router