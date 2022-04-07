const color = {
    mounted(el, { value }) {
        el.style.color = value
    },
    // 当传进来的值更新的时候触发
    componentUpdated(el, { value }) {
    },
    // 指令与元素解绑的时候，移除事件绑定
    unmounted(el) {
    },
  }
  
  export default color

  // <button v-copy="copyText">复制</button>
