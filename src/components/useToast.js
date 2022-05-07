import { reactive, createApp, h } from 'vue';

const state = reactive({
  show: false, // toast元素是否显示
  text: ''
});

const toastVM = createApp({
  setup() {
    return () => h(
    'div',
    {
      // 这里是根据配置显示一样不同的样式
      class: [
      'lx-toast',
      ],
      style: {
        // width: '100px',
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "8px 10px",

        display: state.show ? 'block' : 'none',
        background: "rgb(0,0,0, 0.6)",
        color: "#fff",
        borderRadius: "4px",
      }
    },
    state.text
    );
  }
});

const container = document.createElement('div');
container.id = 'lx-toast';
document.body.appendChild(container);
toastVM.mount('#lx-toast');

export function useToast() {
  return function Toast(msg) {
    console.log(msg)
    // 拿到传来的数据
    state.show = true
    state.text = msg
    setTimeout(() => {
      state.show = false
    }, 2000);
  }
}