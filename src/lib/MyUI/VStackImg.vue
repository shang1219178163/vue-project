<template>
  <VStack
    class="vstackimg-content" 
    bottom="0"
    right="0"
  >
    <van-image 
      :src="imgUrl" 
      :error-icon="imgPlaceholder"
      fit="cover" 
    >
      <template #loading>
        <slot name="loading">
          <van-loading type="spinner" size="20" />
        </slot>
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

import img_placeholder from '@/assets/images/img_placeholder_base64';


defineProps({
  imgUrl: {
    type: String,
    default: img_placeholder,
  },
  imgPlaceholder: {
    type: String,
    default: img_placeholder,
  },
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

.vstackimg-content{
  display: flex;
  align-self: flex-start;

  width: $width;
  height: $height;
  border-radius: $borderRadius;

  border: 1px solid red;
}

</style>