<template>
  <div class="bg">
    <slot></slot>
    <div class="tag">
      <slot name="tag"></slot>
    </div>
  </div>
</template>


<script setup>
import { ref, } from 'vue';
// import { Toast } from 'vant;

const props = defineProps({
  top: {
    type: String,
    default: "auto",
  },
  left: {
    type: String,
    default: "auto",
  },
  bottom: {
    type: String, 
    default: "auto",
  },
  right: {
    type: String,
    default: "auto",
  },
  width: {
    type: String,
    default: "auto",
  },
  height: {
    type: String,
    default: "auto",
  },
  padding: {
    type: String,
    default: "2px 3px",
    desc: "tag 内边距"
  },

  overflow: {
    type: String,
    default: "hidden",
  },
  borderRadius: {
    type: String,
    default: "4px",
    desc: "tag 圆角"
  },
  bgBorderRadius: {
    type: String,
    default: "4px",
    desc: "背景画布圆角"
  },
});

</script>


<style scoped lang='scss'>
.bg{
  position: relative;

  border-radius: v-bind(bgBorderRadius); 
  // background: green;
}

.tag{
  position: absolute;

  top: v-bind(top); 
  left: v-bind(left); 
  right: v-bind(right); 
  bottom: v-bind(bottom); 

  width: v-bind(width); 
  height: v-bind(height); 

  overflow: v-bind(overflow); 

  padding: v-bind(padding);
  border-radius: v-bind(borderRadius); 
  // background-color: red;
}
</style>