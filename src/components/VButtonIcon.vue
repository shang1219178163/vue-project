/**
 * 左右图标按钮
 ****************************************************
 * slot name="left"     title       slot name="right"*
 ****************************************************
 */
<template>
        <div :class="['content1', {'outline': hasOutline }]" @click="click">
        <div class="left" v-show="hasLeft">
            <slot name="left">
                <van-image 
                :src="require('@/assets/images/icon_district.png')" 
                width="18px" 
                height="18px" 
                />
            </slot>
        </div>
        <div>
            <slot>
                <div v-if="title" class="title">{{title}}</div>
            </slot>
        </div>
        <div class="right" v-show="hasRight">
            <slot name="right">
                <van-image 
                :src="rightIcon" 
                width="18px" 
                height="18px" 
                />
            </slot>
        </div>
    </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watchEffect, computed, onMounted, } from 'vue';
// import { Toast } from 'vant;

const props = defineProps({
    title: {
        type: String,
        default: "IconButton"
    },
    color: {
        type: String,
        default: "#333333"
    },
    padding: {
        type: String,
        default: "0 8px"
    },
    // isSelected:{
    //     type: Boolean,
    //     default: false
    // }
    hasLeft:{
        type: Boolean,
        default: true
    },
    hasRight:{
        type: Boolean,
        default: false
    },
    hasOutline:{
        type: Boolean,
        default: false,
    }
})

let isSelected = ref(false)

const emit = defineEmits(["click", ]);
// 
// const emit = defineEmits(['update:isSelected', "click"]);
// 
// const isSelectedVal = computed({
//   set: (newVal) => {
//     if (props.isSelected !== newVal) {
//       emit('update:isSelected', newVal);
//     }
//   },
//   get: () => props.isSelected,
// });

const rightIcon = computed(() => {
    // return require('@/assets/images/icon_arrow_fill_bottom.png') 
    return isSelected.value ? 
    require('@/assets/images/icon_arrow_fill_top.png') 
    : require('@/assets/images/icon_arrow_fill_bottom.png')
});

const click = () => {
    isSelected.value = !isSelected.value;
    console.log(isSelected);
    emit('click', isSelected);
};

</script>


<style scoped lang='scss'>
.content1{
    display: flex;
    justify-content: space-evenly;
    justify-content: space-between;
    align-items: center;

    padding: v-bind(padding);

    &.outline{
        border: 1px solid v-bind(color);
        border-radius: 4px;
    }
    // height: 55px;
    // background-color: green;
}

.left{
    margin-right: 5px;
}

.title{
    
    color: v-bind(color);

    @include syn-text-nowarp;
}

</style>