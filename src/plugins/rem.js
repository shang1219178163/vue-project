// 可以使用rem作为单位
const baseSize = 16;

function initRem() {
  let doc = window.document.documentElement;
  const cale = doc.clientWidth > 750 ? 2 : doc.clientWidth / 375;
  window.document.documentElement.style.fontSize = `${baseSize * cale}px`;
}

initRem();

window.addEventListener('resize', function () {
  initRem();
  // 解决键盘弹出后挡表单的问题
  if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
    window.setTimeout(function () {
      if ('scrollIntoView' in document.activeElement) {
        document.activeElement.scrollIntoView(false);
      } else {
        document.activeElement.scrollIntoViewIfNeeded(false);
      }
    }, 0);
  }
})

document.addEventListener('focusout', () => {
  setTimeout(() => {
    const height = document.documentElement.scrollTop || document.body.scrollTop;
    window.scrollTo(0, height + 1);
  }, 20)
});