<template>
  <div 
    :style="overlayStyle" 
    v-show="isShow" 
    @click="overlayClickRef"
  >
    <div v-if="typeRef==='text'" :style="contentStyle" v-text="templateRef">
    </div>
    <!-- <div v-else-if="typeRef==='img'" :style="contentStyle"> -->
      <!-- <img width='44' height='44' :src="require('@/assets/images/img_loading.gif')" alt='' /> -->
    <!-- </div> -->
    <div v-else :style="contentStyle" v-html="templateRef">
    </div>
  </div>
</template>


<script setup>
import {computed, reactive, ref} from 'vue';
import img_loading from '@/assets/images/img_loading.gif';
import img_loading_base64 from '@/assets/images/img_loading_base64.js';


const props = defineProps({
  type: {
    type: String,
    reuire: false,
    default: "text",
    validator: (value) => {
      return ['text', 'html'].includes(value); 
    },
    desc: "展示类型 text 或者 html",
  },
  template: {
    type: String,
    default: "默认文本",
    desc: "展示内容, 文字或者 html",
  },
  duration: {
    type: Number,
    default: 1500,
    desc: "持续时间, 0 为不自动消失,需手动调用 clear() 关闭",
  },
  contentTop: {
    type: String,
    default: "50%",
    desc: "内容距离顶部距离(top)",
  },
  contentMargin: {
    type: String,
    default: "0px",
    desc: "内容 margin",
  },
  contentPadding: {
    type: String,
    default: "8px 10px",
    desc: "内容 padding",
  },
  contentColor: {
    type: String,
    default: "#ffffff",
    desc: "内容 文字颜色",
  },
  contentBg: {
    type: String,
    default: "rgb(0,0,0, 0.6)",
    desc: "内容 背景色",
  },
  overlayBg: {
    type: String,
    default: "transparent",
    desc: "背板颜色",
  },
  overlayClick: {
    type: Function,
    desc: "背板点击事件, 一般 duration === 0 时使用",
  },
})

// 展示开关
let isShow = ref(false);
// 展示类型
let typeRef = ref(props.type);
let templateRef = ref(props.template);
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
  template = props.template, 
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
  templateRef.value = template; 
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
 * 显示加载中(默认小茶杯)
 * @param {*} src 图片 
 */
function loading({img = img_loading_base64, width = 64, height = 64}){
  show({
    type:"html",
    // template: `<img width='44' height='44' src="${img_loading}" />`, 
    template: `<img width='${width}' height='${height}' src="${img}" />`, 
    duration: 0, 
    contentBg: "transparent",
  });
}

function loading_img({img = img_loading, width = 64, height = 64}){
  show({
    type:"html",
    // template: `<img width='44' height='44' src="${img_loading}" />`, 
    template: `<img width='${width}' height='${height}' src="${img}" />`, 
    duration: 0, 
    contentBg: "transparent",
  });
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
  };
});

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
  };
});

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


