<template>
  <div>
    <van-nav-bar class="van-nav-bar" title="服务进度" left-arrow  @click-left="onClickLeft"/>
    <vnet
      class="vnet"
      :status="netStatus"
      nodataMsg="暂无内容."
      @click="clickVNet"
    >
      <van-pull-refresh
       :class="['content', {'mp': isWxmp }]"
        v-model="loading"
        @refresh="onRefresh"
        style="transition-duration: 300ms"
      >
        <!-- <ServiceManagerCell
        :name="getValueByKey(obj.value, 'manangerName')"
        :tag="getValueByKey(obj.value, 'repairType')"
        :phone="getValueByKey(resdata.value, 'mobile')"
        :score="getValueByKey(resdata.value, 'score')"
        :times="getValueByKey(resdata.value, 'serveTimes')"
        @clickPhone="clickPhone"
        >
        </ServiceManagerCell> -->

        <div class="divider"></div>

        <ServiceStepCell
        v-for="(e, index) in list" :key="index"
        :stepType="getStepType(index, list)"
        :leftTitle="getLeftTitle(e.createdTime)"
        :leftSubtitle="getLeftSubtitle(e.createdTime)"
        :stepIcon="getStepIcon(index)"
        :title="e.nodeName ?? '-'"
        :desc="e.remark"
        >
        </ServiceStepCell>

      </van-pull-refresh>
    </vnet>
  </div>
</template>

<script setup>
// import vnet from "@/components/VNet.vue";
// import * as uplusApi from '@/utils/uplusApi'

import {getCurrentInstance, ref, reactive, onMounted, watch} from "vue";
import { Toast } from "vant";
import ServiceStepCell from '@/components/ServiceStepCell.vue';
import CallPhone from "@/components/CallPhone.vue";

import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

const instance = getCurrentInstance();
const {$uplus} = instance.appContext.config.globalProperties;
console.log(instance.type.__file);


const router = useRouter();
const route = useRoute()
const store = useStore();

defineProps({
  isShowNavBar: {
    type: Boolean,
    default: true,
  },
  height: {
    type: Number,
    default: Number.MAX_VALUE,
  },
});

const obj = reactive({})
const resdata = reactive({})

const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

/// -1 请求失败; 0无数据; 1 正常列表,有数据;
let netStatus = ref(1);
let netStyle = ref("start");

const list = reactive([]);
const currentPhone = ref("-");

onMounted(() => {
    // handleRouteParams()
      onRefresh()
})

// watch(() => route.params, (params, previousParams) => {
//     if (Object.keys(params).length === 0 ) {
//         return;
//     }
//     // console.log(`watch: ${JSON.stringify(params)}`);
//     // e.value = params;
//     // console.log(`e.value: ${JSON.stringify(e.value)}`);
//     handleRouteParams()
// })

// const handleRouteParams = () => {
//     // alert(`watch: ${JSON.stringify(route.params)}`)
//     if (!route.params.obj) {
//         console.log("*** 路由参数不含对象 obj");
//         return
//     }

//     obj.value = JSON.parse(route.params.obj) 
//     console.log(">>>obj", JSON.stringify(obj));

//     onRefresh()
// }

const clickVNet = () => {
  onRefresh();
};

const onLoad = async () => {
  setTimeout(() => {
    // for (let i = 0; i < 20; i++) {
    //     list.value.push(list.value.length + 1);
    // }
    // 加载状态结束
    loading.value = false;
    // 数据全部加载完成
    finished.value = true;
  }, 1000);
};

const onRefresh = () => {
  try {
    const items = [
        {
            "id": "759",
            "parentId": null,
            "nodeName": "已派单",
            "nodeCode": "1",
            "remark": null,
            "createdTime": "2022-03-22 14:29:10",
            "childNode": null
        },
        {
            "id": "760",
            "parentId": null,
            "nodeName": "待接单",
            "nodeCode": "2",
            "remark": null,
            "createdTime": "2022-03-22 14:29:10",
            "childNode": null
        },
        {
            "id": "771",
            "parentId": null,
            "nodeName": "取消预约",
            "nodeCode": "0",
            "remark": null,
            "createdTime": "2022-03-23 15:49:23",
            "childNode": null
        }
    ]
    if (items.length > 0) {
        list.splice(0, list.length);
        list.push(...items);
    }

    if (list.length == 0) {
      netStatus.value = 0;
      netStyle.value = "center";
    } else {
      netStatus.value = 1;
      netStyle.value = "start";
    }
    // 加载状态结束
    loading.value = false;
    // 数据全部加载完成
    finished.value = true;
    // onLoad();
  } catch (error) {
    // if (error === NET_ERROR_MSG) {
    //     netStatus.value = -1;
    // }
    // netStatus.value = -1;
    // netStyle.value = "center";
    Toast(error ?? "网络请求失败");
  }
};
      onRefresh()

const click = (val) => {
  const json = JSON.stringify(val)
  console.log(">>>click",json);

}

const clickButton = (event, val) => {
  const json = JSON.stringify(val)
  console.log(">>>json",json);
  console.log(">>>event", event);

};

const clickCompany = (val) => {
  // console.log(val);
  window.location.href = val; 
}

/// 获取属性对应键值
const getValueByKey = (e, key, defaultValue = "-") => {
  if (e == undefined) {
    return defaultValue
  }
  return Object.keys(e).includes(key) ? `${e[key]}` : defaultValue;
};

const getStepType = (index, list) => {
  if (index === 0) {
      return 0;
  }
  if (index === list.length - 1) {
      return 1;
  }
  return 2;
};

const getStepIcon = (index) => {
  if (index === 0) {
      return require('@/assets/images/icon_step_selected.png');
  }
  return require('@/assets/images/icon_step.png');
};

const getLeftTitle = (val) => {
  return val.length > 10 ? val.substring(5, 10) : "-";
};

const getLeftSubtitle = (val) => {
  return val.length > 16 ? val.substring(11, 16) : "-";
};

</script>

<style scoped lang="scss">
.content {
  height: inherit;

  background-color: green;
  background-color: #f6f6f6;

  overflow: scroll;

  height: calc(100vh);
  &.mp{
    height: calc(100vh - 46px);
  }
}
.divider{
  height: 6px;
  background: #F7F7F7;
}

// .van-pull-refresh { 
// 	height: calc(100vh - 100px) !important;
//  	overflow: auto !important;
// } 
</style>
