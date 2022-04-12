<template>
    <div>
        <div>事件代理</div>
        <ul @click="onClick">
          <li class="li" v-for="(item, index) in 6" :data-index="index">
            {{ item }}
          </li>
        </ul>
    </div>
</template>


<script setup>
import { ref, reactive, getCurrentInstance, onMounted, inject } from 'vue';
// import { Toast } from 'vant;

const list = reactive([])


const onClick = (e) => {
    if (e.target.nodeName.toLowerCase() === 'li') {
        const index = parseInt(e.target.dataset.index)
        // 获得引索后，只需要修改data数据就能改变UI了
        doSomething(index)
    }
};

const doSomething = (val) => {
    console.log(val)
};

</script>


<style scoped lang='scss'>

.li{
  margin: 10px;
  background-color: green;
}

</style>