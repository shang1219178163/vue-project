export default function (el, binding) {
  if (!binding.value || binding.value === 1) {
    el.style.overflow = 'hidden';
    el.style.whiteSpace = 'nowrap';
    el.style.textOverflow = 'ellipsis';
      
  } else {
    el.style.overflow = 'hidden';
    el.style.display = '-webkit-box';
    el.style.webkitBoxOrient = 'vertical';
    el.style.webkitBoxClamp = parseInt(binding.value, 10);
  }
}

{/* <div v-ellipsis:100> 需要省略的文字是阿萨的副本阿萨的副本阿萨的副本阿萨的副本</div> */}
