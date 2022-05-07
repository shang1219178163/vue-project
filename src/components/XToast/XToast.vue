<template>
  <div class="toast" v-show="isShow"> 
   {{message}}
  </div>
</template>


<script setup>
import {ref} from 'vue';

defineProps({
  type: {
    type: String,
    reuire: false,
    default: "text",
    validator: (value) => {
      return ['text', 'img', 'html'].includes(value); 
    }
  }
});

let isShow = ref(false)
let message = ref("")

function show(msg='默认文本', duration = 1500){
  message.value = msg;
  isShow.value = true;

  // 指定时间后弹框消失
  setTimeout(() => {
    isShow.value = false;
  }, duration);
}
// export default {
//   data(){
//     return {
//         message:'',
//         isShow:false
//     }
//   },
//   methods:{
//     show(message='默认文本',duration=1000){
//       this.message = message;
//       this.isShow = true;

//       // 指定时间后弹框消失
//       setTimeout(() => {
//           this.isShow = false;
//       }, duration);
//   }
//   }
// }
</script>


<style>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 8px 10px;

  background: rgb(0,0,0, 0.6);
  color: #ffffff;
  border-radius: 4px;


  /* position: fixed;
  z-index: 100;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: 8px 10px;

  transform: translate(-50%,-50%);

  background-color: black;
  opacity: .7;
  border-radius: 4px;
  text-align: center;
  color: white;  */

}
</style>


