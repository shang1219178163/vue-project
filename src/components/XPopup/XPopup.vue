<template>
  <div 
    :style="overlayStyle" 
    v-show="isShow" 
    @click="overlayClickRef"
  >
    <div v-if="typeRef==='text'" :style="contentStyle" v-text="messageRef">
    </div>
    <div v-else :style="contentStyle" v-html="messageRef">
    </div>
  </div>
</template>


<script setup>
import {computed, reactive, ref} from 'vue';

const props = defineProps({
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
  contentTop: {
    type: String,
    default: "50%",
  },
  contentMargin: {
    type: String,
    default: "0px",
  },
  contentPadding: {
    type: String,
    default: "8px 10px",
  },
  contentColor: {
    type: String,
    default: "#ffffff",
  },
  contentBg: {
    type: String,
    default: "rgb(0,0,0, 0.6)",
  },
  overlayBg: {
    type: String,
    default: "transparent",
  },
  overlayClick: {
    type: Function,
  }
})

let isShow = ref(false);

let typeRef = ref(props.type);
let messageRef = ref(props.message);
let durationRef = ref(props.duration);
let contentTopRef = ref(props.contentTop);
let contentMarginRef = ref(props.contentMargin);
let contentPaddingRef = ref(props.contentPadding);
let contentColorRef = ref(props.contentColor);
let contentBgRef = ref(props.contentBg);
let overlayBgRef = ref(props.overlayBg);
let overlayClickRef = ref(props.overlayClick);

/**
 * 展示弹窗
 * @param {*} options 
 */
function show({
  type = props.type, 
  message = props.message, 
  duration = props.duration, 
  contentTop = props.contentTop, 
  contentMargin = props.contentMargin,
  contentPadding = props.contentPadding, 
  contentColor = props.contentColor, 
  contentBg = props.contentBg, 
  overlayBg = props.overlayBg, 
  overlayClick = props.overlayClick, 
}){
  isShow.value = true;
  typeRef.value = type; 
  messageRef.value = message; 
  durationRef.value = duration; 
  contentTopRef.value = contentTop; 
  contentMarginRef.value = contentMargin; 
  contentPaddingRef.value = contentPadding; 
  contentColorRef.value = contentColor; 
  contentBgRef.value = contentBg; 
  overlayBgRef.value = overlayBg; 
  overlayClickRef.value = overlayClick; 

  if (duration === 0 || duration === Number.POSITIVE_INFINITY) {
    return;
  }
  clear(duration);
}


/**
 * 清除弹窗
 * @param {*} duration 延迟小时时间
 */
function clear(duration = 0){
    // 指定时间后弹框消失
  setTimeout(() => {
    isShow.value = false;
  }, duration);
}

const overlayStyle = computed(()=>{
  return {
    position: "fixed",
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",

    background: overlayBgRef.value || props.overlayBg,
}});

const contentStyle = computed(()=>{
  return {
    position: "fixed",
    // top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // margin: "0",
    // padding: "8px 10px",

    // color: "#ffffff",
    // background: "rgb(0,0,0, 0.6)",
    borderRadius: "4px",

    top: contentTopRef.value,
    margin: contentMarginRef.value,
    padding: contentPaddingRef.value,
    color: contentColorRef.value,
    background: contentBgRef.value,
}});

</script>


<style scoped>
/* .overlay{
  position: fixed;
  top: 0%;
  left: 0%;

  width: 100%;
  height: 100%;

  background: red;
  background: v-bind(overlayBg);
  background: transparent;
} */

/* .content{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 8px 10px;

  color: #ffffff;
  background: rgb(0,0,0, 0.6);
  border-radius: 4px;

  top: v-bind(contentTop);
  padding: v-bind(contentPadding);
  color: v-bind(contentColor);
  background: v-bind(contentBg);
} */
</style>


