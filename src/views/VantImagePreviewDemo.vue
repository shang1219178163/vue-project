<template>
  <h1>VanImagePreview</h1>
  <button @click="click">show</button>
  <ImagePreview v-model:show="show" :images="images" @change="onChange">
    <template v-slot:index>第{{ index }}页</template>
  </ImagePreview>

</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
import { Toast } from 'vant';
import { ImagePreview, } from 'vant';

// const VanImagePreview = ImagePreview.Component;

// ImagePreview({
//   images: [
//     'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
//     'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
//   ],
//   onClose() {
//     Toast('关闭');
//   },
// });

const show = ref(false);
const index = ref(0);
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
];
const onChange = (value) => {
  index.value = value;
};

const click = () => {
  show.value = !show.value
};


const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

</style>