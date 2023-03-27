<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <div class="page">
    <button @click="onClick">button</button>
    <input type="button" name="" id="btn" value="添加" />
    <ul id="ul1">
      <li>111</li>
      <li>222</li>
      <li>333</li>
      <li>444</li>
    </ul>
  </div>

</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

onMounted(() => {
  onload();
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

const onload = () => {
  var oBtn = document.getElementById("btn");
  var oUl = document.getElementById("ul1");
  var aLi = oUl.getElementsByTagName('li');
  var num = 4;

  addClick();
  oUl.onmouseover = (ev) => handleStyle(ev, function(style) {
      style["background"] = "red";
    }
  );

  oUl.onmouseout = (ev) => handleStyle(ev, function(style) {
      style["background"] = "#fff";
    }
  );
  
  //添加新节点
  oBtn.onclick = function(){
    num++;
    var oLi = document.createElement('li');
    oLi.innerHTML = 111*num;
    oUl.appendChild(oLi);
  };
}

const addClick = () => {
  var oUl = document.getElementById("ul1");
  oUl.onclick = function(ev){
    var ev = ev || window.event;
    var target = ev.target;
    if(target.nodeName.toLowerCase() == 'li'){
      console.log(`ev:${ev}`);
      console.log(`currentTarget:${ev.currentTarget}`);//e.currentTarget 指向添加监听事件的对象。
      console.log(`target:${ev.target}`);//e.target 指向触发事件监听的对象。

      alert(target.innerHTML);
    }
  }
}

//事件委托，添加的子元素也有事件
const handleStyle = (ev, cb) => {
  var ev = ev || window.event;
  var target = ev.target;
  if(target.nodeName.toLowerCase() == 'li'){
    // target.style.background = "#fff";
    cb(target.style);
  }
};

</script>


<style scoped lang='scss'>
.page{
  padding: 12px;
}
</style>