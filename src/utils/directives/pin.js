const pin = (el, binding) => {
  el.style.position = 'fixed';
  // binding.arg 是我们传递给指令的参数
  const s = binding.arg || 'top';
  el.style[s] = binding.value + 'px';
};

// app.directive('pin', {
//     mounted(el, binding) {
//       el.style.position = 'fixed'
//       const s = binding.arg || 'top'
//       el.style[s] = binding.value + 'px'
//     },
//     updated(el, binding) {
//       const s = binding.arg || 'top'
//       el.style[s] = binding.value + 'px'
//     }
//   })

export default pin;



{/* <div id="dynamicexample">
  <h3>Scroll down inside this section ↓</h3>
  <p v-pin:[direction]="200">I am pinned onto the page at 200px to the left.</p>
</div>

direction: 'right' */}
