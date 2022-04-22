<template>
    <navbar
    class="navbar"
    v-if="!isWxmp && isShowNavBar"
    isleftarrow
    :navBarTitle="navBarTitle" 
    closeWebview
    isFixed
    @click-right="onClickRight"
    >
        <template #right>
            <van-popover 
                v-model:show="showPopover"
                placement="bottom-end"
                :actions="list" 
                @select="onSelect"
            >
                <template #reference>
                    <div class="right">
                        <div class="text">切换订单</div>
                        <van-image 
                        :src="require('@/assets/images/icon_order_change.png')" 
                        width="18px" 
                        height="18px" />
                    </div>
                </template>
                <van-list
                    class="van-list"
                    style="width: 240px; max-height: 500px;"
                    >
                        <van-cell v-for="i in 9" :key="i" :title="i" @click="showPopover = false" />
                        <PopverCell
                        v-for="i in 9" :key="i" @click="showPopover = false"
                        :isSelected="selectedIdx === i"
                        ></PopverCell>
                    </van-list>
            </van-popover>
        </template>
    </navbar>
    <IconButton class="iconButton">sadfasd</IconButton>
    <!-- <van-tabs 
    :class="['van-tabs', {'top': !isWxmp && isShowNavBar }]" 
    v-model:active="active" 
    :color="'var(--theme-color)'"
    line-width="20"	
    line-height="3"
    sticky
    >
        <van-tab title="装修图纸">
            <div v-for="(e, i) in 3" :key="i">{{i}}</div>
        </van-tab>
        <van-tab title="物料清单">
            <div v-for="(e, i) in 3" :key="i">{{i}}</div>
        </van-tab>
        <van-tab title="人员清单">
            <div v-for="(e, i) in 3" :key="i">{{i}}</div>
        </van-tab>
    </van-tabs> -->

</template>

<script setup>
import navbar from '@/components/navbar.vue'
import PopverCell from '@/components/PopverCell.vue'
import IconButton from '@/components/IconButton.vue'


import { getCurrentInstance, ref, reactive, onMounted, onActivated, } from 'vue';
import { Toast } from 'vant';
import { useStore } from 'vuex';

onMounted(() => {
  onRefresh()
});

onActivated(() => {
  onRefresh();
})

const instance = getCurrentInstance();
const { $uplus } = instance.appContext.config.globalProperties;
// LOG.log(instance.type.__file);

const store = useStore();

defineProps({
    isShowNavBar: {
        type: Boolean,
        default: true
    },
})

const navBarTitle = ref("家装档案");

const phone = ref('');
phone.value = store.getters.userPhone;

const loading = ref(false);
let list = reactive([]);
let selectedIdx = ref(null);

const onRefresh = async () => {
    document.title = navBarTitle.value;
    // console.log("document.title:", document.title, navBarTitle.value);
};

const active = ref(0);

const showPopover = ref(false);

// 通过 actions 属性来定义菜单选项
const actions = reactive([
    { title: '选项一' },
    { title: '选项二' },
    { title: '选项三' },
]);

const onSelect = (action) => Toast(action.text);

const onClickRight = () => {
    console.log("onClickRight", list);
    // Toast('按钮');
    // showPopover.value = true;
    onRefreshBizNos()
}


</script>


<style scoped lang="scss">

.right{
    @include syn-flex-center;

    .text{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
        text-align: center;
        line-height: 20px;
        font-weight: 400;

        margin-left: 5px;
    }
}

.actions{
    @include flex-center-column;
}

.van-list{
  overflow: scroll;
}
.popver{
    width: 400px;
    height: 400px;
}
.popver-cell{
    @include syn-flex-center;

    height: 45px;
    width: calc(300px);
}

.van-grid-item{
    height: 45px;
    width: 300px;
}


.van-tabs {
    position: fixed;
    overflow: hidden;
    width: 100%;
    // margin-top: 30px;
    &.top{
        margin-top: 46px + 44px;
    }
}

.pageContain{
    height: calc(100vh - 44px - 46px);
    overflow: scroll;

    &.mp{
        height: calc(100vh - 44px - 44px);
    }
}

.float-btn{
    position: absolute;
    /* position: fixed; */

   width: 100px;
   height: 100px;
   /* float: right; */
   /* margin: 20px; */
    right: 12px;
    bottom: 100px;
//    background-color: red;
   z-index: 10;
}

.iconButton{
    position: relative;
    // overflow: hidden;
    width: 50%;
    height: 25px;
    // margin-top: 30px;
    top: 46px;

    // &.top{
    //     margin-top: 46px + 44px;
    // }

}
</style>