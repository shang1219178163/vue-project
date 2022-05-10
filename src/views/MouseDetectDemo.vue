<template>
  <div class="header">header
    <div class="top_nav">
      <ul>
        <li>1111111</li>
        <li>222222</li>
        <li>3333333</li>
      </ul>
    </div>
  </div>
  <div  class="text">bbbbbbbb</div>
  <div class="text">cccccc</div>

  <div class="father">鼠标移入显示
      <p class="child">隐藏内容，经过鼠标移入后展示。</p>
    </div>
</template>


<script setup>
import { getCurrentInstance, defineProps, ref, reactive, watch, onMounted, } from 'vue';
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
.header{
    background-color: green;
}

.top_nav{
    /* width: 300px; */
    height: 100px;
    position: absolute;
    background-color: red;

    margin-top: 30px;
    margin-left: 30px;
}

.header .top_nav{
    display: none;
}

.header:hover .top_nav{
    display: block;
}

.text{
    width: 300px;
    /* height: 400px; */
    background-color: yellow;

    text-align: right;
}

.father .child{
 display:none;   
}

.father:hover .child{
 display:block;   
}
</style>