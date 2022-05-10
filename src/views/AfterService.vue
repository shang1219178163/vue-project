<template>
    <div>
        <van-nav-bar title="售后服务" 
        left-arrow  
        @click-left="onClickLeft" 
        right-text="请求"  
        @click-right="onRefresh" 
        v-if="props.isShowNavBar"
        />
            <!-- <div>div</div> -->
            <van-pull-refresh 
            v-model="loading" 
            @refresh="onRefresh" 
            style="transition-duration: 300ms;">
                <van-list
                    v-model:loading="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                    <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
                    <service-cell
                        v-for="e in list"
                        :key="e.uid"
                        :headUrl="e.headUrl"
                        :name="e.name"
                        :tag="e.job"
                        :experience="e.experience"
                        :des="e.des"
                        @click="callphone(e)"
                        />
                </van-list>
            </van-pull-refresh>
            <!-- <call-phone-sheet v-model:show="show" v-model:phone="phone" @click=clickItem(phone) /> -->
            <call-phone 
            :show="showPhoneSheet" 
            :phone="'188888888999'" 
            @click="clickItem" 
            @cancell="cancell" />

    </div>
</template>

<script setup>
import { 
    ref, 
    reactive, 
    getCurrentInstance, 
    watch, 
    computed, 
    } from 'vue';
import { Toast } from 'vant';
import ServiceCell from '@/components/ServiceCell.vue';

import CallPhone from "@/components/CallPhone.vue";


const props = defineProps({
    isShowNavBar: {
        type: Boolean,
        default: true
    }
})

const instance = getCurrentInstance()
// console.log(instance);
const { $api } = instance.appContext.config.globalProperties

const onClickLeft = () => history.back();
// const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = () => {
    setTimeout(() => {
        if (refreshing.value) {
            list.value = [];
            refreshing.value = false;
        }

        // for (let i = 0; i < 20; i++) {
        //     list.value.push(list.value.length + 1);
        // }
        loading.value = false;
        // 是否有更多数据
        // finished.value = list.value.length >= 60;
        finished.value = true;

    }, 1000);
};

const onRefresh = () => {
    // 清空列表数据
    finished.value = false;

    // 重新加载数据
    list.value = []
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true;
    onLoad();
};

const onClickRight = (async () => {
    getList()
})


const showPhoneSheet = ref(false);

const showSheet = () => {
  showPhoneSheet.value = true;
};

const closeSheet = () => {
  showPhoneSheet.value = false;
};

const list = reactive([
  {
    uid: 0,
    name: "厨房局改焕新",
    headUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
    job: "智慧场景",
    experience: "10年",
    phone: 16666666666,
    des: "我们是最棒的服务!",
  },
  {
    uid: 1,
    name: "赵四",
    headUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
    job: "012345678910",
    experience: "10年",
    phone: 18888888888,
    des: "我们是最棒的服务!业主的小事是我们的大事最多三十六个字展示文字可以展示",
  },
  {
    uid: 2,
    name: "王五",
    headUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
    job: "项目管家",
    experience: "10年",
    phone: 19999999999,
    des: "我们是最棒的服务!业主的小事是我们的大事最多三十六个字展示文字可以展示业主的小事是我们的大事最多三十六个字展示文字可以展示",
  },
]);

const seletedObj = reactive(list[0]);

const actions = [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }];

const callphone = (e) => {
  seletedObj.value = e;
  console.log(e.name, seletedObj.value.phone);

  showSheet();
};

const phone = ref("呼叫    " + seletedObj.phone) 

watch(seletedObj, (e) => {
  phone.value =  "呼叫    " + e.value.phone
})

const onCancel = () => Toast("取消");

const clickSheetCell = (e) => {
  // console.log(e.name)
  alert(e.phone);
  closeSheet();
};

const clickItem = (e) => {
  // console.log(e.name)
//   alert(e);
  console.log(e.split(" "), e.split(" ").slice(-1)[0]);
  closeSheet();
};

const cancell = () => {
  closeSheet();
  console.log(instance.type.__file, "cancell");
}


const phones = computed({
  get: () => {
    var array = list.map((e) => {
      return { name: `呼叫   ${e.phone}` };
    });
    // alert(array)
    return array;
  },
});


const getList = async () => {
    $api["fake.list"]().then((result) => {
        console.log(result)
        // alert(JSON.stringify(result))
    }).catch((err) => {
        console.log(err)
    });
}


</script>


<style scoped>


</style>