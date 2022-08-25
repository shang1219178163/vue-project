<template>
  <h1>{{ route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <div>
    
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

watch(() => route.params, (params, previousParams) => {
  if (Object.keys(params).length === 0 ) {
    return;
  }
  handleRouteParams();
});

const handleRouteParams = () => {

};


const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

</style>