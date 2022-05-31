
/**
 * 左右插槽 cell,
 ****************************************************
 * slot name="left"   slot name="right"*
 ****************************************************
 */
<template>
    <div class="content" @click="click">
        <div class="left" >
            <slot name="left">
                <VButtonIcon 
                class="button-icon" 
                :title="tolength(title, titleLength)"
                >
                    <template #left>
                        <van-image 
                        :src="require('@/assets/images/icon_district.png')" 
                        width="18px" 
                        height="18px" 
                        />
                    </template>
                </VButtonIcon>
                <VButtonIcon 
                class="button-icon" 
                :title="tolength(subtitle, subtitleLength)"
                >
                    <template #left>
                        <van-image 
                        :src="require('@/assets/images/icon_manager.png')" 
                        width="18px" 
                        height="18px" 
                        />
                    </template>
                </VButtonIcon>
                <div class="divder"></div>
            </slot>
        </div>
        <div class="mid">
            <slot name="mid">  
            </slot>
        </div>
        <div class="right">
            <slot name="right">
                <img
                v-show="isSelected" 
                class="cell-check"
                style="width: 18px; height: 18px;" 
                :src="require('@/assets/images/icon_checked.png')" 
                />     
            </slot>
        </div>
    </div>
</template>


<script setup>

import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;

const props = defineProps({
    isSelected: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: "-",
    },
    subtitle: {
        type: String,
        default: "-",
    },
    titleLength: {
        type: Number,
        default: 4,
        validator: (value) => {
            return value >= 1;
        }
    },
    subtitleLength: {
        type: Number,
        default: 4,
        validator: (value) => {
            return value >= 1;
        }
    },
})

const emit = defineEmits(['update:isSelected', "click"]);

// const isSelectedVal = computed({
//   set: (newVal) => {
//     if (props.isSelected.value !== newVal) {
//       emits('update:isSelected', newVal);
//     }
//   },
//   get: () => props.isSelected.value,
// });

const click = () => {
    console.log("VPopverCell", props.isSelected);
    emit('click', props);
};


const tolength = (val, count = Number.MAX_VALUE, prefix = "") => {
  if (val == undefined) return "-"
  return val.length < count ? val : val.substring(0, count) + prefix;
};

</script>


<style scoped lang='scss'>

// div{
//     border: 0.5px solid blue;
// }

.content{
    display: flex;
    justify-content: space-between;

    height: 44px;
    padding-right: 12px;
}


.left{
    @include  flex-center;
    justify-content: space-evenly;
}

.divider {
  width: inherit;
  height: 0.5px;
  background-color: #eeeeee;
  background-color: red;
//   margin: 0 20px;
}

.right{
    @include  flex-center;
    align-self: center;
}
</style>