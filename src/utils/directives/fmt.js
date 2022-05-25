const findEle = (el) => {
  const target = el instanceof HTMLInputElement ? el : el.querySelector("input");
  // const target = parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type);
  return target;
}

const trigger = (e, binding) => {
  console.log("trigger", e.target.value);
  if (!binding.value) {
    return;
  }
  // Regex check
  if (binding.value.test(e.target.value)) {
    e.target.value = e.target.value.replace(binding.value, "");
    e.target.dispatchEvent(new Event("input"));//调用input事件使vue v-model绑定更新,下面相同
  }
}

const fmt = {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(el, binding, vnode) {
    const target = el instanceof HTMLInputElement ? el : el.querySelector("input");
    // target.addEventListener("keydown", e => {
    //   trigger(e, binding);
    // });
    target.addEventListener("keyup", e => {
      trigger(e, binding);
    });
    target.addEventListener("paste", e => {
      trigger(e, binding);
    });
  },
  unmounted (el, binding) {
    const target = binding.arg ? document.getElementById(binding.arg) : window;
    // target.removeEventListener('keydown');
    target.removeEventListener('keyup');
    target.removeEventListener('paste');
  }
}

export default fmt


