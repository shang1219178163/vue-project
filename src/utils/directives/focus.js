const focus = {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(el) {
    // 聚焦元素
    el.focus();
  }
};

export default focus;


  // <input v-focus />