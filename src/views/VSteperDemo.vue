<template>
  <h1>VSteper</h1>
  <VSteper
  :count="4"
  >
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

  <h1>VSteperVertical</h1>
  <VSteperVertical
  :count="5"
  >
    <template #left="slotProps">
      <div class="left">
        <button class="button active">
          dot:{{slotProps.index}}{{slotProps.index}}
        </button>
      </div>
    </template>
    <template #right="slotProps">
      <div class="right">
        <div v-for="(item, i) in slotProps.index" :key="i">right{{i}}</div>
      </div>
    </template>
  </VSteperVertical>

</template>

<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
// import { Toast } from 'vant;


</script>

<style scoped lang="scss">

$randomColor: v-bind(randomHex);

.button{
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;

  &.active{
    color: white;
    background-color: $--theme-color;
  }
}

.left{
  background: orange;
}

.right{
  width: 100%;
  background: gold;

  padding: 8px 0;
}

</style>

