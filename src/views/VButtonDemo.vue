<template>
    <div>
        <VButton
            class="VButton"
            @click="click"
            ></VButton>
        <VButton 
            class="VButton"
            type="highlighted" 
            @click="click" ></VButton>
        <VButton 
            class="VButton"
            type="disabled" 
            @click="click" ></VButton>

        <VButton
            class="VButton"
            background="linear-gradient(90deg, #FFC800 2%, rgba(255,200,0,0.00) 100%)"
            :fontSize="'12px'"
            @click="click"
            >
            <div>asdfasdf</div>
            </VButton>
    </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch, defineProps} from 'vue';
// import { Toast } from 'vant;
import { useRouter, useRoute } from 'vue-router';
import VButton from '@/components/VButton.vue';


const router = useRouter();
const route = useRoute()

onMounted(() => {
    onRefresh();
});

watch(() => route.params, (params, previousParams) => {
    if (Object.keys(params).length === 0 ) {
        return;
    }
    handleRouteParams()
})

const handleRouteParams = () => {

};


const onRefresh = async () => {

};

const onMore = async () => {

};

const click = (val) => {
    console.log(">>>", val);
}

</script>


<style scoped lang='scss'>

.VButton{
    margin: 20px;

    width: 80px;
    height: 36px;

    // background-color: red;
}
</style>