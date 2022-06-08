<template>

  <VSteper>
    <template #dot="slotProps">
      <button class="button \\">
        dot:{{slotProps.index}}{{slotProps.index}}
      </button>
    </template>
      <template #dotActive="slotProps">
      <button class="button active">
        dot:{{slotProps.index}}{{slotProps.index}}
      </button>
    </template>
    <template #dotContent="slotProps">
      <h2>
        content:{{slotProps.index}}{{slotProps.index}}
      </h2>
    </template>
  </VSteper>

</template>

<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
// import { Toast } from 'vant;


const onRefresh = async () => {};

const clickNumber = (v) => {
  if (!props.canChangeIdx) {
    return;
  }
  console.log(v);
  indexRef.value = v;
};
</script>

<style scoped lang="scss">

.button{
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;

  &.active{
    color: white;
    background-color: $--theme-color;
  }
}
</style>
