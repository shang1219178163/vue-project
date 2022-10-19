<template>
  <VStack
    class="cell-left__stack" 
    bottom="0"
    right="0"
  >
    <van-image 
      :src="img_placeholder" 
      error-icon="img_placeholder"
      fit="cover" 
    >
      <template #loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>

    <template #positioned>
      <slot></slot>
    </template>
  </VStack>
</template>


<script setup>
import VStack from './VStack.vue';

// import { ref, onMounted } from 'vue';
// import { Toast } from 'vant;

import img_placeholder from '@/assets/images/img_placeholder_activity_base64';


defineProps({
  top: {
    type: String,
    default: 'auto',
  },
  left: {
    type: String,
    default: 'auto',
  },
  bottom: {
    type: String, 
    default: 'auto',
  },
  right: {
    type: String,
    default: 'auto',
  },
  width: {
    type: String,
    default: '44px',
  },
  height: {
    type: String,
    default: '44px',
  },
  borderRadius: {
    type: String,
    default: '44px',
  },
});

</script>


<style scoped lang='scss'>

$width: v-bind(width);
$height: v-bind(height);
$borderRadius: v-bind(borderRadius);


.cell-left__stack{
  display: flex;
  align-self: flex-start;

  width: $width;
  height: $height;
  border-radius: $borderRadius;

  border: 1px solid red;
}

.cell-left__stack_positioned{
  width: .32rem;
  height: .32rem;

  right: 0;
  bottom: 0;
}
</style>