import { createApp, nextTick } from "vue";
import VToast from "./VToast.vue";

export default {
  install: (app, options) => {
    nextTick(() => { 
      /* Vue3的自定义插件 */
      // 1.实例化并绑定组件
      const constructor = createApp(VToast);
      console.log('constructor',constructor);
      const instance = constructor.mount(document.createElement('div'));
      console.log('instance',instance);
      // 2.将挂载的Node添加到body中
      document.body.appendChild(instance.$el);

      // 3.定义全局($toast即是此插件的名称)
      app.config.globalProperties.$vtoast = instance;
    })
  },
};