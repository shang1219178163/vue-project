<template>
  <div>
    <van-nav-bar
      title="人员清单"
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
      style="transition-duration: 300ms"
    >
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        <remodeling-stager-cell
          v-for="e in list"
          :key="e.uid"
          :headUrl="e.headUrl"
          :name="e.name"
          :job="e.job"
          :experience="e.experience"
          :des="e.des"
          :phone="e.phone.toString()"
          @clickPhone="clickPhone(e.phone.toString())"
          @click="clickCell(e)"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup>
import {ref, reactive, getCurrentInstance, watch, computed} from "vue";
import {Toast} from "vant";
import RemodelingStagerCell from "@/components/RemodelingStagerCell.vue";

const props = defineProps({
  isShowNavBar: {
    type: Boolean,
    default: true,
  },
});

const instance = getCurrentInstance();
// console.log(instance);
const {$api, $vphone} = instance.appContext.config.globalProperties;

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
  list.value = [];
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};

const onClickRight = async () => {
  getList();
};

const list = reactive([
  {
    uid: 0,
    name: "张三",
    headUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
    job: "项目管家",
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
    des:
      "我们是最棒的服务!业主的小事是我们的大事最多三十六个字展示文字可以展示业主的小事是我们的大事最多三十六个字展示文字可以展示",
  },
]);

let selectObj = reactive(list[0]);
const phone = ref("-");

const clickPhone = (e) => {
  phone.value = e;
  $vphone.show(e);
};

const clickCell = (e) => {
  selectObj = e;
  console.log(JSON.stringify(selectObj));
};

</script>


<style scoped>

</style>
