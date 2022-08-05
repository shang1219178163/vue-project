import { createApp, nextTick } from "vue";
import VToast from "./VToast.vue";
import img_loading from '@/assets/images/img_loading_base64.js';

// function show ({
//   type = "text", 
//   template = "默认文本", 
//   duration = 1500, 
//   contentTop = "50%", 
//   contentMargin = "0px",
//   contentPadding = "8px 10px",
//   contentColor = "#ffffff",
//   contentBg = "rgb(0,0,0, 0.6)",
//   overlayBg = "transparent",
//   overlayClick,
// }) {

//   const instance = createApp(VToast, {
//     show: true,
//     type: type, 
//     template: template, 
//     duration: duration, 
//     contentTop: contentTop, 
//     contentMargin: contentMargin,
//     contentPadding: contentPadding, 
//     contentColor: contentColor, 
//     contentBg: contentBg, 
//     overlayBg: overlayBg, 
//     overlayClick: overlayClick, 
//   });

//   // 创建一个挂载容器
//   let node = document.querySelector('#vtoast');
//   if (!node) {
//     node = document.createElement('div');
//     node.setAttribute("id", "vtoast");
//     document.body.appendChild(node);
//   }
//   // 挂载组件
//   instance.mount(node);
//   // console.log('VToastOne instance:', instance);

//   if (duration === 0 || duration === Number.POSITIVE_INFINITY) {
//     return;
//   }
//   clear(duration);
// }

// function loading({img = img_loading, width = 64, height = 64}){
//   return show({
//     type:"html",
//     // template: `<img width='44' height='44' src="${img_loading}" />`, 
//     template: `<img width='${width}' height='${height}' src="${img}" />`, 
//     duration: 0, 
//     contentBg: "transparent",
//   });
// }

// function clear(duration = 0){
//   // 指定时间后弹框消失
//   setTimeout(() => {
//     const node = document.querySelector('#vtoast');
//     if (node) {
//       document.body.removeChild(node);
//     }
//   }, duration);
// }

// function isLoading(){
//   const node = document.querySelector('#vtoast');
//   return node;
// }

// export {
//   show,
//   loading,
//   clear,
//   isLoading
// };


export default {
  install: (app, options) => {
    nextTick(() => { 
      /* Vue3的自定义插件 */
      // 1.实例化并绑定组件
      const constructor = createApp(VToast);
      // console.log('constructor',constructor);
      const container = document.createElement('div');
      const instance = constructor.mount(container);
      // console.log('instance',instance);
      // 2.将挂载的Node添加到body中
      document.body.appendChild(instance.$el);

      // 3.定义全局($toast即是此插件的名称)
      app.config.globalProperties.$vtoast = instance;

      console.log("VToast instance:", instance);
    });
  },
};


// const VToast = (options) => {
//   const app = createApp(VToast, options);
//   show(app, options.duration)
// }

// function show(app, duration = 2000) {
//   const oFrag = document.createDocumentFragment();
//   const vm = app.mount(oFrag);

//   document.body.appendChild(oFrag);
// }

const getApp = (component, options) => {
  const app = createApp(component, options);
  return app;
}

function bodyMountComponent(app, cb) {
  // const oFrag = document.createDocumentFragment();
  // const vm = app.mount(oFrag);
  // document.body.appendChild(oFrag);
  
  document.body.appendChild(() => {
    const oFrag = document.createDocumentFragment();
    const vm = app.mount(oFrag);
    return oFrag;
  });

  cb(vm);
  return vm;
}