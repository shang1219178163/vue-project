<template>
  <navbar 
    navBarTitle="曝光检测"
    title="标题"
    rightText="更多"
    isleftarrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  ></navbar>
  <div>
    <div class="header">
    __header
    </div>
    <div class="content">
      <div class="content--row" v-for="(item, index) in 30" :key="index">
        row_{{item}}
      </div>
    </div>
    <div class="footer">
     __footer
    </div>
  </div>
</template>


<script setup>
import navbar from '@/components/navbar.vue'

import { ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';


const io = new IntersectionObserver((entries) =>{
  entries.forEach(entry => {
    console.log(`entry:${entry.target.className} ${entry.target.innerText} ${entry.intersectionRatio}`);
    // intersectionRatio === 1说明该元素完全暴露出来，符合业务需求
    if (entry.intersectionRatio >= 1) {
      console.log(`${entry.target.className} is visible`);
      entry.target.classList.add('active');
      // 。。。 埋点曝光代码

    } else if (entry.intersectionRatio <= 0) {
      console.log(`${entry.target.className} is dismiss`);
      entry.target.classList.remove('active');
    }
    // io.unobserve(entry.target)
  })
}, {
  root: null,
  threshold: 1, // 阀值设为1，当只有比例达到1时才触发回调函数
});

let boxList = [];

onMounted(() => {
  boxList = [...document.querySelectorAll('.content--row')]

  // observe遍历监听所有box节点
  boxList.forEach(box => io.observe(box))
})


const onClickLeft = () => {
  
};

const onClickRight = () => {
  console.log({boxList});
};
</script>


<style scoped lang='scss'>
.header {
  height:70px;

  background: green;
}

.content {
  overflow: scroll;
}

.content--row{
  height:70px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  &.active { 
    background: lightgreen;
  }
}

.footer {
  height:70px;

  background: yellow;
}

</style>