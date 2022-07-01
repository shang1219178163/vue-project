<template>
<ul class="zxx_align_box_4 fix">
    <li>
        <div><img src="//image.zhangxinxu.com/image/study/s/s128/mm1.jpg" /></div>
    </li>
        <li>
        <div><img src="//image.zhangxinxu.com/image/study/s/s128/mm1.jpg" /></div>
    </li>
        <li>
        <div><img src="//image.zhangxinxu.com/image/study/s/s128/mm1.jpg" /></div>
    </li>
    
</ul>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

</script>


<style scoped lang='scss'>
.zxx_align_box_4 li{float:left; margin-right:13px;}
.zxx_align_box_4 li div{display:table-cell; width:144px; height:144px; border:1px solid #beceeb; font-size:118px; text-align:center; vertical-align:middle;}
.zxx_align_box_4 li div img{vertical-align:middle;}
</style>