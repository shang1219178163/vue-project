<template>
  <div>
    <div class="container" @click="oncontainer">container</div>

    <button class="button" @click="onclick">button</button>
  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

const oncontainer = (e) => {
  console.log(e.target.innerText);
};

const onclick = (e) => {
  console.log(e.target.innerText);
};

</script>


<style scoped lang='scss'>
.container{
  width: 100px;
  height: 100px;
  position: relative;
  margin: 20px;
  border: 1px solid red;
}

.container::after{
  position: absolute;
  content: '';
  top: -10px;
  bottom: -10px;
  left: -10px;
  right: -10px;
}

.button{
  // border: 10px solid transparent;

  padding: 0;
}
</style>