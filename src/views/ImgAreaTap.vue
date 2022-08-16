<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  <img :src="img_floating" usemap="#mymap" height="400" width="400" align="center">
  <map name='mymap'>
    <area shape="rect" coords="0,0,200,200" @click="clickArea(0)" />
    <area shape="rect" coords="200,0,400,200" @click="clickArea(1)" />
    <area shape="rect" coords="0,200,200,400" @click="clickArea(2)" />
    <area shape="rect" coords="200,200,400,400" @click="clickArea(3)" />
  </map>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

const img_floating = require('@/assets/images/img_floating.png');

const clickArea = async (val) => {
  console.log(`clickArea ${val}`);
};


</script>


<style scoped lang='scss'>
.img_floating{
  height: 200px;
  width: 100%;
  // object-fit: cover;
  object-fit: contain;
  // object-fit: fill;
  // object-fit: scale-down;

  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.area{
  border: 10px solid blue;
  background-color:red;
}

</style>