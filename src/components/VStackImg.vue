<template>
  <div class="content">
    <slot></slot>
    <img class="tag" :src="img" />
  </div>
</template>


<script setup>
import { ref, computed} from 'vue';

const props = defineProps({
  alignment: {
    type: String,
    default: "topLeft",
    validator: (value) => {
      console.log("alignment", typeof value, value);
      return ["topLeft", "topRight", "bottomLeft", "bottomRight", ].includes(value); 
    }
  },
  img: {
    type: String,
    default: "@/assets/logo.png",
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
  },

  src: {
    type: String,
    default: "hidden",
  },
});

// let topRef = ref(props.top);
// let leftRef = ref(props.left);
// let templateRef = ref(props.template);
// let templateRef = ref(props.template);

// const absoluteStyle = computed(() => {
//   return {
//     position: "absolute",

//     top: props.top,
//     left: props.left,
//     right: props.right,
//     bottom: props.bottom,

//     width: props.width,
//     height: props.height,

//     overflow: props.overflow,

//     borderRadius: props.borderRadius,
//   };
// });


</script>


<style scoped lang='scss'>
.content{
  position: relative;

  border-radius: v-bind(borderRadius); 
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

  border-radius: v-bind(borderRadius); 
  // background-color: red;
}
</style>