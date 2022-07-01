let overscroll = function(el) {
  el.addEventListener('touchstart', function() {    
    let top = el.scrollTop, 
      totalScroll = el.scrollHeight, 
      currentScroll = top + el.offsetHeight;    
    if(top === 0) {
      el.scrollTop = 1;
    } else if(currentScroll === totalScroll) {
      el.scrollTop = top - 1;
    }
  });
  el.addEventListener('touchmove', function(evt) {   
    if(el.offsetHeight < el.scrollHeight)
      evt._isScroller = true;
  });
}
// overscroll(document.querySelector('.scroll'));
overscroll(document.querySelector('#app'))
document.body.addEventListener('touchmove', function(evt) {
    if (!evt._isScroller) {
      evt.preventDefault()
    }
  },
  { passive: false }
)



function noPullDown(selector) {
  //禁止页面拖动
  document.body.addEventListener('touchmove', function (el) {
    console.log('禁止下拉出现网页来源信息')
    if(!selector) {
      el.preventDefault()
    } else {
      // 如果需要部分区域可以滑动，则需传入需要滑动地方的类名
      if (!document.querySelector(selector).contains(el.target)) {
        el.preventDefault()
      }
    }
  }, { passive: false })
}
noPullDown()
