<template>
  <button @click="onClick">button</button>
  <div class="bg">
    <div class="percent" ref="percentRef">
    {{percent}}%
    </div>
  </div>
  <VProgressBar
    :percent="percent"
    @finished="finished"
  >
  </VProgressBar>
</template>


<script setup>
import { ref, reactive, watch, onMounted, } from 'vue';
import { Toast } from 'vant';


const percent = ref(0);
const percentRef = ref(null);

onMounted(() => {
  console.log("percentRef", percentRef);
});

const onClick = async () => {
  if (percent.value >= 100) {
    percent.value = 0;
  }
  setInterval(() => {
    if (percent.value < 100) {
      percent.value += 1;
      percentRef.value.style.width = `${percent.value}%`;
      // console.log("percentRef.value.style.width", percentRef.value.style.width);
    }
  }, 100);
};


const finished = () => {
  Toast("操作完成");
}

</script>


<style scoped lang='scss'>

.bg{
  background-color:rgba(0, 0, 0, 0.1);
  border-radius:9999px;
  height:16px;
  width:50%;
}

.percent{
  box-sizing: border-box;

  display: flex; 
  justify-content: center; 
  align-items: center; 

  background-color: rgb(53, 126, 221); 
  border-radius: 9999px; 
  color: rgb(255, 255, 255); 
  
  font-size: 12px; 

  height: 100%; 
  min-width: 15%;
  padding: 4px; 
}
</style>