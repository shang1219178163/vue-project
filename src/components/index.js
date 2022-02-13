//
//  Index.ts
//  vue-demo
//
//  Created by shangbinbin on 2022/01/22.
//  Copyright © 2022 Shang. All rights reserved.
//
//

// 引入写好的全局组件
import grid1 from '@/components/Grid/Grid_1.vue'
import grid2 from '@/components/Grid/Grid_2.vue'
import grid3 from '@/components/Grid/Grid_3.vue'
import grid4 from '@/components/Grid/Grid_4.vue'
import grid5 from '@/components/Grid/Grid_5.vue'
import grid6 from '@/components/Grid/Grid_6.vue'

import TodoList from '@/components/TodoList.vue'
import submitButton from '@/components/SubmitButton.vue'

// 默认导出插件
export default {
  install: (Vue) => {
    console.log('自定义的插件~')
    // 在自定义的插件中注册为全局组件
    Vue.component('grid1', grid1)
    Vue.component('grid2', grid2)
    Vue.component('grid3', grid3)
    Vue.component('grid4', grid4)
    Vue.component('grid5', grid5)
    Vue.component('grid6', grid6)
    Vue.component('TodoList', TodoList)
    Vue.component('SubmitButton', submitButton)

    // 也可以往Vue的原型对象上添加属性或者方法，名字可以自定义
    // 在其他.vue结尾的文件中，可以通过this，访问自己添加的属性和方法

    // Vue.prototype.$bus = new Vue()
    Vue.prototype.num = 10
    Vue.prototype.$sayHi = () => {
      alert('Hi~')
    }
  }
}
