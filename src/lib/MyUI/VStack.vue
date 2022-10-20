<template>
  <div class="vstack-content">
    <slot></slot>
    <div class="vstack-content__positioned">
      <slot name="positioned"></slot>
    </div>
  </div>
</template>


<script setup>
// import { ref, onMounted } from 'vue';

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
});

</script>


<style scoped lang='scss'>

.vstack-content{
  position: relative;

  border-radius: v-bind(bgBorderRadius); 
}

.vstack-content__positioned{
  position: absolute;

  top: v-bind(top); 
  left: v-bind(left); 
  right: v-bind(right); 
  bottom: v-bind(bottom); 

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>