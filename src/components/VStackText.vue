<template>
  <div class="bg">
    <slot></slot>
    <div v-show="text" class="tag" >{{ text }}</div>
  </div>
</template>


<script setup>

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
  padding: {
    type: String,
    default: "2px 3px",
    desc: "tag 内边距"
  },

  text: {
    type: String,
    default: "文字标签",
  },
  fontFamily: {
    type: String,
    default: "PingFangSC-Medium",
  },
  fontSize: {
    type: String,
    default: "10px",
  },
  color: {
    type: String,
    default: "white",
  },
  backgroud: {
    type: String,
    default: "red",
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

  font-family: v-bind(fontFamily); 
  font-size: v-bind(fontSize); 
  color: v-bind(color); 
  background: v-bind(backgroud); 

  // background-color: red;
}
</style>