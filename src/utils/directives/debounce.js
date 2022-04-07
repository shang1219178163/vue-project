// import _debounce from 'lodash/debounce'
// let fn = null
// const debounce = {
//   inserted: function(el, binding) {
//     fn = _debounce(binding.value, 2000, {
//       leading: true,
//       trailing: false
//     })
//     el.addEventListener('click', fn)
//   },
//   unbind: function(el) {
//     fn && el.removeEventListener('click', fn)
//   }
// }

const debounce = {
  inserted: function (el, binding) {
    let timer
    el.addEventListener('keyup', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 1000)
    })
  },
}

export default debounce


{/* <button v-debounce="debounceClick">防抖</button> */}
