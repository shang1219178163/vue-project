<template>
  <div>
    <a href="#A">A</a>
    <a href="#B">B</a>
    <a href="#C">C</a>
  </div>
  <div className="scroll-ctn">
    <div id="A" className="scroll-panel">
      A
    </div>
    <div id="B" className="scroll-panel">
      B
    </div>
    <div id="C" className="scroll-panel">
      C
    </div>
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
.scroll-ctn {
  display: block;
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  border: 1px solid grey;
}
</style>