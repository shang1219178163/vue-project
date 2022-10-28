<template>
  <navbar 
    navBarTitle="曝光检测"
    :title="$route.meta.title"
    rightText="更多"
    isleftarrow
    @click-right="onClickRight"
  />
  <div id="position-wrapper">
    <div>
      <p class="refresh">下拉刷新</p>
      <div class="position-list">
          <!--列表内容-->
          <div 
            class="positio-list__cell"
            v-for="(item, index) in 20" :key="index"
          
          >
            Row {{index}}
          </div>
      </div>
      <p class="more">查看更多</p>
    </div>
  </div>
</template>


<script setup>
import navbar from '@/components/navbar.vue';

import BScroll from "better-scroll";

import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const onClickRight = () => {
  console.log('onClickRight');
};


const onRefresh = async () => {

};

const onMore = async () => {

};

let pageNo = 1,pageSize = 10,dataList = [],isMore = true;  

onMounted(() => {
  var scroll= new BScroll("#position-wrapper",{
    scrollY:true,//垂直方向滚动
    click:true,//默认会阻止浏览器的原生click事件，如果需要点击，这里要设为true
    pullUpLoad:true,//上拉加载更多
    pullDownRefresh:{
        threshold:50,//触发pullingDown事件的位置
        stop:0//下拉回弹后停留的位置
    }
  });
  //监听下拉刷新
  scroll.on("pullingDown",pullingDownHandler);
  //监测实时滚动
  scroll.on("scroll",scrollHandler);
  //上拉加载更多
  scroll.on("pullingUp",pullingUpHandler);
});



async function pullingDownHandler(){
    dataList=[];
    pageNo=1;
    isMore=true;
    $(".more").text("查看更多");
    await getlist();//请求数据
    scroll.finishPullDown();//每次下拉结束后，需要执行这个操作
    scroll.refresh();//当滚动区域的dom结构有变化时，需要执行这个操作
}
async function pullingUpHandler(){
    if(!isMore){
        $(".more").text("没有更多数据了");
        scroll.finishPullUp();//每次上拉结束后，需要执行这个操作
        return;
    }
    pageNo++;
    await this.getlist();//请求数据
    scroll.finishPullUp();//每次上拉结束后，需要执行这个操作
    scroll.refresh();//当滚动区域的dom结构有变化时，需要执行这个操作    
}
function scrollHandler(){
    if(this.y>50) $('.refresh').text("松手开始加载");
    else $('.refresh').text("下拉刷新");
}
function getlist() {
    //返回的数据
    let result=[];
    dataList=dataList.concat(result);
    //判断是否已加载完
    if(result.length<pageSize) isMore=false;
    //将dataList渲染到html内容中
}    

</script>


<style scoped lang='scss'>

.position-wrapper{
  height:calc(100% - 46px);
}
.positio-list__cell{
  height: 60px;
  border-bottom: 1px solid #eeeeee;
}
</style>