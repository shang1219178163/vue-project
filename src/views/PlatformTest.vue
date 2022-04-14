<template>
    <div>
        <button @click="onClick">{{ val }}</button>
    </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch, defineProps} from 'vue';
// import { Toast } from 'vant;


const ua = window.navigator.userAgent.toLowerCase()

const val = ref("")
val.value = ua


onMounted(() => {
    
});

const onClick = () => {
    console.log("val.value", val.value, /Macintosh/i.test(ua));
};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

</style>