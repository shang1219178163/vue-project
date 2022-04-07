<template>
  <div>
    VUpload
  </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch, defineProps} from 'vue';
// import { Toast } from 'vant;
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute()

onMounted(() => {
  onRefresh();
});

watch(() => route.params, (params, previousParams) => {
  if (Object.keys(params).length === 0 ) {
    return;
  }
  handleRouteParams()
})

const handleRouteParams = () => {

};


const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

</style>