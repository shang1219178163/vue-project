<template>
  <div class="page">
    <navbar
      isleftarrow
      navBarTitle="热门活动" 
      closeWebview
    >
    </navbar> 
    <div class="page-list">
      list
    </div>
  </div>
</template>


<script setup>
import navbar from '@/components/navbar.vue';

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

.page{
  border: 10px solid blue;

  height: 100%;

  display: flex;
  flex-direction: column;
}

.page > div:last-child {
  background-color: tomato;
  flex: 1;
}
</style>