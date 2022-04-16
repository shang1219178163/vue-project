<template>
  <van-nav-bar title="人员清单" left-arrow @click-left="onClickLeft" />
  <ul>
    <user-cell
      v-for="e in list"
      :key="e.uid"
      :headUrl="e.headUrl"
      :name="e.name"
      :job="e.job"
      :experience="e.experience"
      :des="e.des"
      :phone="e.phone"
      @click="callphone(e)"
    />
  </ul>
  <!-- <van-action-sheet
    v-model:show="show"
    cancel-text="取消"
    close-on-click-action
    @cancel="onCancel"
    safe-area-inset-bottom
  >
    <van-cell :title="phone" @click="clickSheetCell(seletedObj.value)">
      <template #icon>
        <img class="van-cell-icon" src="@/assets/logo.png" width="15" height="15" />
      </template>
    </van-cell>
  </van-action-sheet> -->
  <call-phone-sheet v-model:show="show" v-model:phone="phone" @click=clickItem(phone) />
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
import { Toast } from "vant";
import UserCell from "@/components/UserCell";
import CallPhoneSheet from "@/components/CallPhoneSheet";

const onClickLeft = () => history.back();


const show = ref(false);

const showSheet = () => {
  show.value = true;
};

const closeSheet = () => {
  show.value = false;
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
    job: "项目管家",
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
  alert(e);
  console.log(e.split(" "), e.split(" ").slice(-1)[0]);
  closeSheet();
};


const phones = computed({
  get: () => {
    var array = list.map((e) => {
      return { name: `呼叫   ${e.phone}` };
    });
    // alert(array)
    return array;
  },
});

// const phone = computed({
//   get: () => {
//     // return "呼叫    " + seletedObj.value.phone;
//     console.log(seletedObj.phone);
//     return "呼叫    " + seletedObj.phone;
//   },
// });


// eslint-disable-next-line no-undef
defineEmits(["onClickLeft"]);
</script>

<!-- <script>
import UserCellOne from '@/components/UserCellOne.vue'
import {reactive} from 'vue'

export default {
  name: 'App',
  setup(){
    const list = reactive([
        {
          uid: 0,
          name: '张三',
          headUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
          job: '项目管家',
          experience: '10年',
          phone: 16666666666,
          des: '我们是最棒的服务!'
        },
        {
          uid: 1,
          name: '赵四',
          headUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
          job: '项目管家',
          experience: '10年',
          phone: 18888888888,
          des: '我们是最棒的服务!'
        },
        {
          uid: 2,
          name: '王五',
          headUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
          job: '项目管家',
          experience: '10年',
          phone: 19999999999,
          des: '我们是最棒的服务!'
        }
    ])

    const callphone = (e) => {
      // alert(e.name)
      console.log(e.name)
    }
    return {
      list,
      callphone
    }
  },
  components: {
    UserCellOne
  }
}
</script> -->

<style scoped>
.van-cell {
  font-size: 16px;
  font-weight: bolder;
  margin-top: 15px;
}
.van-cell-icon {
  /* border: 0.3px solid blue; */
  padding: 5px 18px 0;
}
</style>
