<template>
  <div class="container">
    <!-- Inner -->
    <div class="container__inner">
      <!-- Content -->
      ...
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
// import { Toast } from 'vant;

const onRefresh = async () => {};

const onMore = async () => {};
</script>

<style scoped lang="scss">
.container {
  /* Background */
  background-color: #ccc;
  background-image: radial-gradient(#fff 50%, transparent 50%);
  background-position: -5px -5px;
  background-repeat: repeat;
  background-size: 10px 10px;

  /* Spacing */
  padding: 5px;

  margin: 20px;
}

.container__inner {
  /* Background */
  // background-color: #ccc;

  height: 300px;
}
</style>
