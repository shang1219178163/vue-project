<template>
  <div class="cell-container" ref="currentRef">
    <div class="item-time">{{ obj.time }}</div>
    <van-swipe-cell>
      <VCard
        :margin="'0rem 0.24rem 0rem 0.24rem '"
        :padding="'0rem'"
        :borderRadius="'0.16rem'"
      >
        <div class="item-content-container">
          <div class="item-content" @click="clickCell(obj)">
            <van-image
              class="item-img"
              v-show="obj.imgUrl"
              fit="cover"
              :src="obj.imgUrl"
              radius="8"
            />

            <div class="item-text-content-all">
              <div 
                :class="['item-text', 'title',]" 
              >
                {{ obj.title }}
              </div>
              <div 
                :class="['item-text', 'content',]" 
                v-if="obj.content"
              >
                {{ obj.content }}
              </div>
            </div>
          </div>
        </div>
      </VCard>
      <template #right v-if="enableSwipe">
        <van-button 
          class="delete-button" 
          type="primary"
          color="#f6f6f6"
          :icon="require('@/assets/images/icon_delete.png')"
          @click="clickDelete(taskId, title)"
         />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script setup>
import { ref, onMounted, computed} from 'vue';

const props = defineProps({
  obj: Object,
});

const emit = defineEmits(['clickSelect', 'clickCell', 'delete', 'update:obj']);

const objRef = computed({
  set: (newVal) => {
    if (objRef.value !== newVal) {
      emit('update:obj', newVal);
    }
  },
  get: () => props.obj,
});

// 点击查看详情，并设置消息已读
function clickCell(obj) {
  emit('clickCell', obj);
}

let currentRef = ref(null);

onMounted(() => {
  objRef.value.el = currentRef.value;
  // console.log('onMounted', objRef.value.title, objRef.value.el, objRef.value.elDot);
});

</script>

<style scoped lang="scss">

.delete-button {
  height: 100%;
  width: 70px;
}
.van-button :deep .van-icon__image{
  width: 0.8rem;
  height: 0.8rem;

  margin-right: 15px;
}

.cell-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  box-sizing: border-box;
}
.item-time {
  display: flex;
  justify-content: center;

  margin-top: 0.32rem;
  margin-bottom: 0.12rem;

  font-family: PingFangSC-Regular;
  font-size: 0.24rem;
  color: #999999;
}
.item-content-container {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item-check{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-check-img {
  width: 0.36rem;
  height: 0.36rem;
  margin-left: 0.16rem;
  margin-right: 0.16rem;
}
.item-img {
  display: flex;
  height: 70px;

  border-radius: 0.08rem;
  // margin-left: 0.24rem;
  // margin-top: 0.24rem;
  // margin-bottom: 0.24rem;
  margin-right: 3px;
}
.item-content {
  display: flex;
  // flex-direction: column;
  flex-grow: 1;
}
.item_dot {
  width: 8px;
  height: 8px;
  position: relative;
  top: 14px;
  left: calc(100% - 10px - 8px);

  border-radius: 4px;
  background: #f05345;
  &.hide{
    background: transparent;
  }
}
.item-text-content-all {
  margin-left: 0.24rem;
  margin-right: 0.24rem + .24rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // height: 1.76rem;
}

.item-text {
  color: #333333;
  font-size: 0.34rem;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  width: 100%;
  // width: calc(100vw - 0.24rem - 0.24rem - 0.48rem);
  margin-bottom: 0.12rem;
}

.title {
  color: #333333;

  font-family: PingFangSC-Medium;
  font-size: 0.34rem;
}

.content {
  color: #979797;
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
}

</style>
