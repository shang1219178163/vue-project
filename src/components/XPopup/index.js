import {  createApp, nextTick  } from "vue";
import XToast from "./XToast.vue";

export default {
  install: (app, options) => {
    nextTick(() => { 
      /* Vue3的自定义插件 */
      // 1.实例化并绑定组件
      const toastConstructor = createApp(XToast);
      const instance = toastConstructor.mount(document.createElement('div'));

      // 2.将挂载的Node添加到body中
      document.body.appendChild(instance.$el);

      // 3.定义全局($toast即是此插件的名称)
      app.config.globalProperties.$toast = instance;
    })
  },
};