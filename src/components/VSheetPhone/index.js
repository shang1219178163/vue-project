import { createApp, nextTick } from "vue";
import VSheetPhone from "./VSheetPhone.vue";

export default {
  install: (app, options) => {
    nextTick(() => { 
      /* Vue3的自定义插件 */
      // 1.实例化并绑定组件
      const constructor = createApp(VSheetPhone);
      const container = document.createElement('div');
      const instance = constructor.mount(container);
      // 2.将挂载的Node添加到body中
      document.body.appendChild(instance.$el);

      // 3.定义全局($toast即是此插件的名称)
      app.config.globalProperties.$vphone = instance;
    })
  },
};