export default {
  mounted(el, bindings) {
    // console.log("el", el);
    console.log("bindings", bindings);

    const tmp = localStorage.getItem('permsssion');
    if (!tmp) {
      return;
    }
    const permissions = JSON.parse(tmp);
    const hasPermssion = permissions.includes(bindings.value);
    if (!hasPermssion) {
      el.style.display = 'none';
      setTimeout(() => {
        el.parentNode.remooveChild(el);
      }, 0);
    }
  }
};