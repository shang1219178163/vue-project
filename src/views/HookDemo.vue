<template>
    <div>
        <!-- <useDebounceDemo></useDebounceDemo> -->

        <useRequestDemo></useRequestDemo>
    <!-- <useModelDemo></useModelDemo>-->
    <!-- <useModelDemo></useModelDemo>-->
    <!-- <useDebounceDemo></useDebounceDemo>-->
    <!-- <useEventBusDemo></useEventBusDemo>-->
    <!-- <useReducerDemo></useReducerDemo> -->
    <!-- <useReducerDemo></useReducerDemo> -->
    </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch} from 'vue';
// import { Toast } from 'vant;

import useRequestDemo from "@/utils/hook/components/useRequest.vue";
import useModelDemo from "@/utils/hook/components/useModel.vue";
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