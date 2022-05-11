import { createApp, nextTick, ref, h } from "vue";
import VToastOne from "./VToastOne.vue";

function toastOne() {
  return new Promise((resolve, reject) => {
    // 实例化组件，createApp第二个参数是props
    const confirmInstance = createApp(VToastOne)
    // 卸载组件
    // const unmount = () => {
    //   confirmInstance.unmount()
    //   document.body.removeChild(parentNode)
    // }
    // 创建一个挂载容器
    const parentNode = document.createElement('div')
    document.body.appendChild(parentNode)
    // 挂载组件
    const instance = confirmInstance.mount(parentNode)


    console.log('confirmInstance', confirmInstance);
    console.log('instance', instance);
  })
}

export default toastOne
