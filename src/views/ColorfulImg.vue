<template>
    <div>
        <div>
            CSS 随意更改img或者background的图片颜色
        </div>"
         <img class="img" :src="require('@/assets/images/icon_step_selected.png')" />
         <img class="img1" :src="require('@/assets/images/icon_step_selected.png')" />
         <img class="img2" :src="require('@/assets/images/icon_step_selected.png')" />
        <button class="button">buttton</button>
    </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch, defineProps} from 'vue';
// import { Toast } from 'vant;

</script>


<style scoped lang='scss'>

$themeColor: red;

.img{
   width: 36px;
   height: 36px;

   transform: translateY(-60px);

   -webkit-filter: drop-shadow($themeColor 0 60px);
   filter: drop-shadow($themeColor 0 60px);  //颜色、x轴偏移量、y轴偏移量
}

.img1{
    width: 36px;
    height: 36px;

    color: red;
    background-blend-mode: lighten;
    background-size: cover;
}

.img2{
    width: 36px;
    height: 36px;

    color: red;
    // background-blend-mode: lighten;
    // background-size: cover;
}

.button{
    background-image: linear-gradient(136deg, #BE965A 100%, #BE965A 1%);
}

</style>