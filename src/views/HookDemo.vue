<template>
    <div>
        <!-- <useDebounceDemo></useDebounceDemo> -->
        <useRequestDemo></useRequestDemo>
    <!-- <useShareDemo></useShareDemo>-->
    <!-- <useDebounceDemo></useDebounceDemo>-->
    <!-- <useEventBusDemo></useEventBusDemo>-->
    <!-- <useReducerDemo></useReducerDemo> -->
    </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch} from 'vue';
// import { Toast } from 'vant;

import useRequestDemo from "@/utils/hook/components/useRequest.vue";
import useShareDemo from "@/utils/hook/components/useShare.vue";
import useDebounceDemo from "@/utils/hook/components/useDebounce.vue";
import useEventBusDemo from "@/utils/hook/components/eventbus/index.vue";
import useReducerDemo from "@/utils/hook/components/useReducer.vue";

const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

</style>