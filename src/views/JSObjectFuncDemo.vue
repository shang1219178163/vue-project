<template>
  <div>
    <button @click="path">path</button>
    <button @click="defineProperty">defineProperty</button>
    <button @click="PlainObject">PlainObject</button>
    <!-- <button @click="assign">assign</button>
    <button @click="assign">assign</button>
    <button @click="assign">assign</button>  -->

  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

const defineProperty = () => {
  const obj = {};

  Object.defineProperty(obj, 'property1', 
    { value(outerParams, outerOptions, postParams) {
      console.log(outerParams, outerOptions, postParams);
    }}
  );

  obj['property1'](11, 22, 33)
};

const path = () => {

};

const assign = () => {

};

const PlainObject = () => {
  const obj = {};
  const obj1 = new Object();
  console.log(obj, obj1);
};

</script>


<style scoped lang='scss'>

button{
  border: 1px solid transparent;
  margin: 8px;
}

</style>