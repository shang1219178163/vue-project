

var toast = function({
  duration = 15000, 
  template = "默认文本", 
  qualifiedName = "class", 
  qualifiedValue = "web-toast"}) {
  /*设置信息框停留的默认时间*/
  var el = document.createElement("div");
  el.setAttribute(qualifiedName, qualifiedValue);
  el.innerHTML = template;
  document.body.appendChild(el);
  el.classList.add("fadeIn");
  setTimeout(function () {
      el.classList.remove("fadeIn");
      el.classList.add("fadeOut");
      /*监听动画结束，移除提示信息元素*/
      el.addEventListener("animationend", function () {
          document.body.removeChild(el);
      });
      el.addEventListener("webkitAnimationEnd", function () {
          document.body.removeChild(el);
      });

  }, duration);
}
