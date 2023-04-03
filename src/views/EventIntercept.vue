<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <div class="page" @click.capture.stop="doThis">
    <button @click="onClick">button</button>
  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

onMounted(() => {
  onRefresh();
});

const onRefresh = () => {

};


const doThis = () => {
  console.log(`${new Date()}: doThis`);
};

const onClick = () => {
  console.log(`${new Date()}: onClick`);

};

</script>


<style scoped lang='scss'>

.page{
  background-color: green; 
}

</style>