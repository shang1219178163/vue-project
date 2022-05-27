const findEle = (el, tag) => {
  const target = el instanceof HTMLInputElement ? el : el.querySelector(tag);
  // const target = el.tagName.toLowerCase() === tag ? el : el.querySelector(tag);
  return target;
};

const trigger = (e, binding) => {
  // console.log("trigger", e.target.value);
  // console.log("binding", binding);

  // Regex check
  if (binding.value.test(e.target.value)) {
    e.target.value = e.target.value.replace(binding.value, "");
    e.target.dispatchEvent(new Event("input"));//调用input事件使vue v-model绑定更新,下面相同
  }
};

export default {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(el, binding, vnode) {
    const target = findEle(el, "input");
    if (!binding.value) {
      return;
    }

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
    if (!binding.value) {
      return;
    }
    const target = findEle(el, "input");
    // target.removeEventListener('keydown');
    target.removeEventListener('keyup');
    target.removeEventListener('paste');
  }
};


//将符合指令值的输入内容过滤
/* <van-field
v-model="username"
name="用户名"
label="用户名"
placeholder="用户名"
v-field="/[^\u4E00-\u9FA5]/g"
/> */