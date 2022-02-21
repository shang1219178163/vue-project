<template>
    <div>
        <!-- <navbar isleftarrow=true navBarTitle="家装档案"></navbar> -->
        <van-nav-bar title="家装档案" left-arrow @click-left="onClickLeft"/>
        <van-tabs v-model:active="active" 
        color="#BE965A"
        line-width="20"	
        line-height="3"
        >
            <van-tab title="装修图纸">
                <remodeling-drawings class="pageContain" :isShowNavBar="false" >
                </remodeling-drawings>
            </van-tab>
            <van-tab title="物料清单">
                <remodeling-materials class="pageContain" :isShowNavBar="false" >
                </remodeling-materials>
            </van-tab>
            <van-tab title="人员清单">
                <remodeling-stagers class="pageContain" :isShowNavBar="false" >
                </remodeling-stagers>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { H5Router } from '@/router/routes.js';
import router from '../router';

import RemodelingDrawings from './RemodelingDrawings.vue';
import RemodelingMaterials from './RemodelingMaterials.vue';
import RemodelingStagers from './RemodelingStagers.vue';


const active = ref(0);

const tabTitles = ref([
    "装修图纸",
    "物料清单",
    "人员清单"
])

const clickTab = () => {
    alert(active.value)
}

const onClickLeft = () => history.back();

</script>


<style scoped>

.pageContain{
    /* background-color: green; */
    height: 100%;
    width: 100%;
}
</style>