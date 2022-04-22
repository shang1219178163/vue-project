<template>
    <div class="content">
        <div class="left">
            <!-- <template #default>
                <slot></slot>
            </template> -->
            
            <van-image 
                :src="require('@/assets/images/icon_district.png')" 
                width="18px" 
                height="18px" 
            />
            <span>标题名称</span>
            <van-image 
                :src="require('@/assets/images/icon_order_change.png')" 
                width="18px" 
                height="18px" 
            />
            <span>管家名称</span>
            <div class="divder"></div>
        </div>
        <div class="arrow">
            <img
            :v-show="isSelected" 
            class="cell-check"
            style="width: 18px; height: 18px;" 
            :src="require('@/assets/images/icon_checked.png')" 
            />     
        </div>
    </div>
</template>


<script setup>
import { getCurrentInstance, defineProps, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;

defineProps({
    isSelected: {
        type: Boolean,
        default: false
    },
})



const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

div{
    border: 0.5px solid blue;
}

.content{
    display: flex;
    justify-content: space-between;

    height: 44px;
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

.arrow{
    @include  flex-center;
    align-self: center;
}
</style>