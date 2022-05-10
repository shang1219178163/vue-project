<template>
    <div class="container">
        <div class="top">
        顶部视图
        </div>
        <vnet class="vnet"
        :status="netStatus"
        @click="onNet"
        >
        </vnet>
    </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, defineProps } from 'vue';
// import vnet from '@/components/VNet.vue';


let netStatus = ref(0);

const onNet = (val) => {
    console.log(val);

    // netStatus.value = 0;
    netStatus.value = -1;

}
// setTimeout(() => {
//     netStatus.value = 0
// }, 2000);

// setTimeout(() => {
//     netStatus.value = -1
// }, 2000);
// </script>

<style scoped>
    
.container{
	display: flex;
	flex-flow: column nowrap;
	height: 500px;
	border: 2px dashed orange;
}

.top {
	flex-basis: 100px;
	background-color: lightblue;

    display:flex; 
    justify-content:center;
    align-items:center;
}

.vnet {
	flex: 1;
	background-color: darkcyan;
}
</style>