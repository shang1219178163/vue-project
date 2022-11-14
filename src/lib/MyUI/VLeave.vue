/** 
剩余视图 默认 margin/padding 8px, borderRadius 4px;
**********************************************
 * slot name="header"
**********************************************
 * 剩余高度视图
**********************************************
 * slot name="footer"
********************************************** 
*/

<template>
  <div class="vleave-box">
    <div class="vleave-box__header">
      <slot name="header">header</slot>
    </div>
    <div class="vleave-box__leave">
      <slot>剩余高度视图</slot>
    </div>
    <div class="vleave-box__footer">
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>

<script setup>
// import {ref} from "vue";

// const props = defineProps({
//   height: {
//     type: String,
//     default: "'100vh'",
//   },
// });
</script>

<style scoped lang="scss">
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vleave-box {
  display: flex;
  flex-flow: column nowrap;

  height: inherit;
  position: fixed;
}

.vleave-box__header {
  width: 100vw;
}

.vleave-box__footer {
  width: 100vw;
}

.vleave-box__leave {
  flex: 1;

  overflow: auto;
}
</style>
