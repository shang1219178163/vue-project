<template>
  <div class="container">
    <header class="container__header">
      <div>我是header</div>
    </header>
    <main class="container__main">
      <div 
        class="container__main--tem"
        v-for="(item, index) in 20" :key="index"
      >
      item_{{index}}
      </div>
    </main>
    <footer class="container__footer">
      <div>我是footer</div>
    </footer>
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
  display: flex;
  flex-direction: column;
  height: 100%;
}

.container__header{
  flex-shrink: 0;

  position: sticky;
  top: 0;

  height: 30px;

  background: #dfdfdf;
}


.container__footer {
  flex-shrink: 0;

  position: sticky;
  bottom: 0;

  height: 30px;

  background: #dfdfdf;
}


.container__main {
  flex-grow: 1;

  // overflow: auto;
}

.container__main--tem{
  padding: 8px;
  height: 45px;

  border-bottom: 0.3px solid #4e4e4e;
}
</style>
