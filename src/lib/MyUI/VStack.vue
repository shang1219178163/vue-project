<template>
  <div class="content">
    <slot></slot>
    <div class="positioned">
      <slot name="positioned"></slot>
    </div>
  </div>
</template>


<script setup>
// import { ref, onMounted } from 'vue';
// import { Toast } from 'vant;

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
.content{
  position: relative;

  border-radius: v-bind(bgBorderRadius); 
}

.positioned{
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