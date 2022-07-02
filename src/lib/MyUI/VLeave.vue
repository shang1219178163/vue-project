/** * 剩余视图 默认 margin/padding 8px, borderRadius 4px;
********************************************** * slot name="header" * *
******************************************* * * * * * 剩余高度视图 * * * * *
******************************************* * slot name="footer" *
********************************************** */

<template>
  <div class="container">
    <div class="header">
      <slot name="header">header</slot>
    </div>
    <div class="leave">
      <slot>剩余高度视图</slot>
    </div>
    <div class="footer">
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  height: {
    type: String,
    default: "'100vh'",
  },
});
</script>

<style scoped lang="scss">
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-flow: column nowrap;
  // height: v-bind(height);
  height: inherit;

  border: 1px dashed orange;

  position: fixed;
}

.header {
  width: 100vw;
}

.footer {
  width: 100vw;
}

.leave {
  flex: 1;
  flex-direction: column;

  overflow: auto;

  background-color: darkcyan;
  @include flex-center;
}
</style>
