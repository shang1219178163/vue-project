<template>
  <div 
    class="overlay" 
    v-show="isShow" 
    @click="overlayClick"
  >
    <div class="content">
      {{message}}
    </div>
  </div>
</template>


<script setup>
import {reactive, ref} from 'vue';

// defineProps({
//   type: {
//     type: String,
//     reuire: false,
//     default: "text",
//     validator: (value) => {
//       return ['text', 'img', 'html'].includes(value); 
//     }
//   },
//   overlayColor: {
//     type: String,
//     default: "rgb(0,0,0, 0.6)",
//   },
//   overlayClick: {
//     type: Function,
//   }
// });

let options = {
  type: {
    type: String,
    reuire: false,
    default: "text",
    validator: (value) => {
      return ['text', 'img', 'html'].includes(value); 
    }
  },
  message: {
    type: String,
    default: "默认文本",
  },
  duration: {
    type: Number,
    default: 1500,
  },
  overlayColor: {
    type: String,
    default: "rgb(0,0,0, 0.6)",
  },
  overlayClick: {
    type: Function,
  }
}

let isShow = ref(false);
let obj = reactive(options);

function show(options){
  isShow.value = true;

  obj = options;

  // 指定时间后弹框消失
  setTimeout(() => {
    isShow.value = false;
  }, options.duration);
}

</script>


<style>
.overlay{
  position: fixed;
  top: 0%;
  left: 0%;

  width: 100%;
  height: 100%;

  background: red;
  background: v-bind(overlayColor);
  background: transparent;
}

.content{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 8px 10px;

  background: rgb(0,0,0, 0.6);
  color: #ffffff;
  border-radius: 4px;
}
</style>


