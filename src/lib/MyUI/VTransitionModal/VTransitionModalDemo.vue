<!--
可定制插槽和 CSS 过渡效果的模态框组件。
-->
<template>
  <button id="show-modal" @click="showToggle">Show Modal One</button>
  <h3 class="text">hello</h3>

  <!-- 使用这个 modal 组件，传入 prop -->
  <Modal 
    :show="showModal" 
    :delay="delay" 
    @close="showToggle"
  >
    <template #header>
      <h3>custom header VTransitionModalOneDemo</h3>
    </template>
  </Modal>
</template>

<script setup>
import Modal from './VTransitionModal.vue'

import { ref } from 'vue'

const props = defineProps({
  show: Boolean,
  maskAlpha: {
    type: Number,
    default: 0.4,
  },
  delay: {
    type: Number,
    default: 2000,
  },
});

const showModal = ref(false);

const showToggle = () => {
  showModal.value = !showModal.value;
  if (showModal.value && props.delay >= 0) {
    setTimeout(() => showModal.value = false, props.delay);
  }
};

const color = ref('red');
// color.value = 'rgba(0, 0, 0, 0.3)';
// window.addEventListener("popstate", function (evt) {
//   showToggle();//响应前进、后退的回调方法
// }, false)
</script>

<style scoped>
.text{
  color: v-bind(color);
}
</style>