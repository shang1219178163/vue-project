<!--
可定制插槽和 CSS 过渡效果的模态框组件。
-->

<template>
  <button id="show-modal" @click="showToggle">Show Modal</button>
  <h3 class="text">hello</h3>

  <!-- 使用这个 modal 组件，传入 prop -->
  <VTransitionModal 
    :show="showModal" 
    maskCloseable
    @close="showToggle"
  >
    <template #footer>
      <h3>custom footer</h3>
    </template>
    <!-- <div class="alert-container">
      alert-container
    </div> -->
  </VTransitionModal>
</template>


<script setup>
import { ref } from 'vue';

const props = defineProps({
  delay: {
    type: Number,
    default: 2000,
  }
});

const showModal = ref(false);

const showToggle = () => {
  showModal.value = !showModal.value;
  if (showModal.value && props.delay >= 0) {
    setTimeout(() => showModal.value = false, props.delay);
  }
};

const color = ref('red');

</script>


<style scoped lang="scss">
.alert-container {
  width: 80%;
  margin: 0px auto;
  padding: 0.32rem;
  background-color: #fff;
  border-radius: 4px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  
  border: 1px solid red;
}

</style>

<style scoped>
.text{
  color: v-bind(color);
}
</style>