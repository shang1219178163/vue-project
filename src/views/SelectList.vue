<template>
  <div class="container">
    <navbar
      v-if="hasNavBar"
      isleftarrow
      navBarTitle="消息" 
      closeWebview
    >
      <template #right>
        <div @click="onClickRight">编辑</div>
      </template>
    </navbar>
      <VPullRefresh
        class="container--content"
        v-model="loading"
        @refresh="onRefresh"
        :isSuccess="isSuccess"
        style="transition-duration: 300ms"
      >
      <div
        class="container--content__cell"
        v-for="(e, index) in list"
        :key="e.index"
        @click="clickDetail(e)"
        >
          <div v-show="isEditing" @click="clickSelect(e)">
            <img
              class="item-icon-select"
              v-if="e.isSelected"
              :src="icon_notice_selected"
            />
            <img
              class="item-icon-select"
              v-else
              :src="icon_notice_unselected"
            />
          </div>
          <h3>{{e.title}}</h3>
        </div>

        <div
          class="text-load-more"
          v-if="!loading && haveMore"
          @click="getMoreMsgHistory"
        >
          加载更多
        </div>
        <div class="text-load-more" v-else-if="!loading">无更多数据</div>
      </VPullRefresh>
      <div class="section-delete" v-show="isEditing">
        <div class="section-delete-box">
          <van-checkbox 
            class="section-delete-box-checkbox" 
            icon-size="17px"
            :checked="checked"
            @click="checkAll"
          >全选</van-checkbox>
          <van-button 
            class="section-delete-box-button" 
            plain 
            type="primary"
            @click="cancelEditMsg"
          >取消编辑</van-button>
          <van-button 
            class="section-delete-box-button" 
            type="primary"
            @click="clickDelete"
          >删除</van-button>
        </div>
      </div>
  </div>
</template>


<script setup>
import navbar from '@/components/navbar.vue';
import VPullRefresh from '@/components/VPullRefresh.vue';


import { getCurrentInstance, ref, reactive, computed, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';
import "@/utils/extensions";

import icon_notice_selected from '@/assets/images/icon_notice_selected.png';
import icon_notice_unselected from '@/assets/images/icon_notice_unselected.png';


const props = defineProps({
  isShowNavBar: {
    type: Boolean,
    default: true,
  },
  editable: {
    type: Boolean,
    default: false,
  },
});


const currentInstance = getCurrentInstance();
const { $platform } = currentInstance.appContext.config.globalProperties;

let netStatus = ref(1);

let loading = ref(true);
let haveMore = ref(false);
let isSuccess = ref(true);

let isEditing = ref(true);

let isSelectAll = ref(false);

let checked = ref(false);


const hasNavBar = computed(() => {
  // return false;//add test
  return !$platform.isWxmp && props.isShowNavBar;
});


const clickVNet = () => {

};


const onClickRight = () => {
  isEditing.value = !isEditing.value;
};

const onRefresh = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1500);
};

function clickSelect(val) {
  console.log('clickSelect', val);
  val.isSelected = !val.isSelected;

  let noselected = list.find(item => !item.isSelected);
  checked.value = !noselected;
}

const clickDetail = (val) => {

};

const deleteMsg = () => {

};
// const list = Array(3).fill().map(i => {
//   'title': `${i}`,
//   'index': i,
//   'isSelected': false,
// });

const list = reactive([
  {
    title: 'title_0',
    index: 0,
    isSelected: true,
  },
  {
    title: 'title_1',
    index: 1,
    isSelected: false,
  },
  {
    title: 'title_2',
    index: 2,
    isSelected: false,
  },
]);

const pageContainHeight = computed(() => {
  if (hasNavBar.value) {
    return 'calc(100% - 46px)';
  }
  return 'calc(100%)';
});

const checkAll = () => {
  checked.value = !checked.value;
  isSelectAll.value = checked.value;
  selectAll();
};

const cancelEditMsg = () => {
  isEditing.value = false;
};

const clickDelete = () => {
  const items = list.filter((e) => e.isSelected);
  console.log(items.map((e) => e.index));
};

const selectAll = () => {
  list.forEach((item) => {
    item.isSelected = isSelectAll.value;
  });
};

</script>


<style scoped lang='scss'>
.container{
  position: fixed;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;

}

.container--content{
  position: relative;

  height: inherit;
  width: 100%;

  height: v-bind(pageContainHeight);
  // background-color: red;

  flex: 1;
}

.container--content__cell{

  height: 70px;

  border-bottom: 1px solid rgba(#000000, 0.1);
}

.item-icon-select {
  width: 0.36rem;
  height: 0.36rem;
  margin-left: 0.24rem;
}


.section-delete{
  padding: .2rem 0 .68rem .5rem;

  // margin-top: calc(100vh - 98px);
}
.section-delete-box{
  display: flex;
  justify-content: flex-end;
  align-content: center;

  position: relative;
}

.section-delete-box-button{

  width: 2.04rem;
  height: .88rem;

  margin-right: 10px;

  border-radius: .44rem;

  font-family: PingFangSC-Medium;
  font-size: 12px;
  font-weight: 500;
}

.section-delete-box-checkbox{
  position: absolute;

  top: 11px;
  left: 0;
}

.section-delete-box-checkbox :deep .van-checkbox__label{
  font-family: PingFangSC-Medium;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  letter-spacing: 0.1px;
  line-height: 20px;
}
</style>