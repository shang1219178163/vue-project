<template>
    <div>
        
        <div>off line test</div>
        <img :src="image" alt="">
        <img :src="img_net_error_base64" 
            />
    </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch} from 'vue';
// import { Toast } from 'vant;
import { useRouter, useRoute } from 'vue-router';
import img_net_error_base64 from '@/assets/images/img_net_error_base64.js';


const image = ref("")
image.value = img_net_error_base64;

</script>


<style scoped lang='scss'>

</style>