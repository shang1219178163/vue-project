<template>
  <VSteperNumber
    height="30px"
    :color="'orange'"
    @min="onMin"
  >
  </VSteperNumber>
</template>

<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
import { Toast } from 'vant';

const onMin = (v) => {
  Toast(`最小值是 ${v}`)
}
</script>

<style scoped lang="scss">

</style>
