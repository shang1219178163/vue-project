<template>
  <!-- <h1>{{ $route.meta.title }}</h1> -->
  <div class="page__recommend">
    <div class="page__recommend__title">更多推荐</div>
      <div class="page__recommend__list">
        <div 
          class="page__recommend__list__item"
          v-for="(item, index) in list" :key="index"
          v-lazy:background-image = "item" 
        >
        ADActivityCell
        </div>
    </div>
  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

let list = reactive([
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-5.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-6.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-7.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-8.jpeg',

]);

const handleRouteParams = () => {

};


const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>
.page__recommend__title{
  // height: .88rem;
  padding: .2rem .24rem .2rem .24rem;

  font-family: PingFangSC-Medium;
  font-size: 17px;
  font-weight: 500;
  color: #333333;
  letter-spacing: 0;
  line-height: .4rem;
  // text-align: center;
}

.page__recommend__list{
  height:calc(100vh - 4.88rem - 0.88rem - .92rem);
  padding-bottom: 12px;

  overflow: scroll;

  box-sizing: border-box; 
}

.page__recommend__list__item:first-child{
  padding-top: 8px;
}

.page__recommend__list__item:nth-child(n){
  height: 5.62rem;
  width: calc(100vw - 0.48rem);

  margin-top: 0;
  margin: 0 0.24rem 0.24rem 0.24rem;

  background-size: cover;
  background-repeat: no-repeat;

  border-radius: .16rem; 

  border: 1px solid blue;

  font-family: PingFangSC-Medium;
  font-size: 17px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
}

</style>