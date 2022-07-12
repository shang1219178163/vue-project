<template>
  <div class="cell-container" ref="currentRef">
    <slot name="time">
        <div class="item-time">{{ time }}</div>
    </slot>
    <van-swipe-cell>
      <slot name="cell">
        <VCard
          :margin="'0rem 0.24rem 0rem 0.24rem '"
          :padding="'0rem'"
          :borderRadius="'0.16rem'"
        >
          <div class="item-content-container">
            <div v-show="isEditing" @click="clickSelect(index, isSelected)">
              <img
                class="item-icon-select"
                v-if="isSelected"
                :src="require('@/assets/images/icon_selected.png')"
              />
              <img
                class="item-icon-select"
                v-else
                :src="require('@/assets/images/icon_unselected.png')"
              />
            </div>
              <slot name="content">
                <van-image
                  class="item-img"
                  v-show="imgUrl !== undefined && imgUrl.length !== 0"
                  fit="fit"
                  :src="imgUrl"
                  radius="4"
                />
                <div class="item-content" @click="clickSeeMore(reviewPage, taskId, title, readStatus)">
                  <div class="item_dot" v-show="readStatus === 1"></div>
                  <div class="item-text-content-all">
                    <div
                      :class="[
                        'item-title-text',
                        {
                          'has-img-width':
                            !isEditing && imgUrl !== undefined && imgUrl.length !== 0,
                        },
                        {
                          'selected-no-img-width':
                            isEditing && (imgUrl === undefined || imgUrl.length === 0),
                        },
                        {
                          'selected-has-img-width':
                            isEditing && imgUrl !== undefined && imgUrl.length !== 0,
                        },
                      ]"
                    >
                      {{ title }}
                    </div>
                    <div
                      :class="[
                        'item-content-text',
                        {
                          'has-img-width':
                            !isEditing && imgUrl !== undefined && imgUrl.length !== 0,
                        },
                        {
                          'selected-no-img-width':
                            isEditing && (imgUrl === undefined || imgUrl.length === 0),
                        },
                        {
                          'selected-has-img-width':
                            isEditing && imgUrl !== undefined && imgUrl.length !== 0,
                        },
                        {
                          'has-dot-margin-bottom': readStatus === 1,
                        },
                      ]"
                    >
                      {{ content }}
                    </div>
                  </div>
                </div>
              </slot>
          </div>
        </VCard>
      </slot>

      <template #right>
        <slot name="right">
          <van-button 
            class="delete-button" 
            type="primary"
            color="#f6f6f6"
            :icon="require('@/assets/images/icon_delete.png')"
            @click="clickDelete(taskId, title)"
         />
        </slot>
      </template>
    </van-swipe-cell>
  </div>
</template>

<script setup>
import VCard from './VCard.vue';

import { ref, } from 'vue';

defineProps({
  time: String,
  title: String,
  content: String,
  readStatus: Number,
  reviewPage: String,
  isEditing: Boolean,
  isSelectAll: Boolean,
  isSelected: Boolean,
  index: Number,
  taskId: String,
  imgUrl: String,
});

const emit = defineEmits(['clickSelect', 'clickSeeMore', 'delete']);

// 点击选择/未选择
function clickSelect(index, isSelected) {
  let selectedValue = !isSelected;
  console.log('clickSelect -> selectedValue=' + selectedValue);
  emit('clickSelect', index, selectedValue);
}

// 点击查看详情，并设置消息已读
function clickSeeMore(url, taskId, title, readStatus) {
  emit('clickSeeMore', url, taskId, title, readStatus);
}

// 点击删除
function clickDelete(taskId, title, cb = () => {}) {
  console.log('taskId', taskId, title);
  emit('delete', [taskId], title, currentRef.value, cb);
  if (cb) {
    currentRef.value.remove();
  }
}

let currentRef = ref(null);

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
  font-size: 0.24rem;
  color: #999999;
  margin-top: 0.32rem;
  margin-bottom: 0.12rem;
  justify-content: center;
  display: flex;
}
.item-content-container {
  background-color: #ffffff;
  display: flex;
  height: 1.76rem;
  flex-direction: row;
  align-items: center;
}
.item-icon-select {
  width: 0.36rem;
  height: 0.36rem;
  margin-left: 0.24rem;
}
.item-img {
  display: flex;
  width: 1.28rem;
  height: 1.28rem;
  border-radius: 0.08rem;
  margin-left: 0.24rem;
  margin-top: 0.24rem;
  margin-bottom: 0.24rem;
}
.item-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.item_dot {
  border-radius: 4px;
  background-color: #f05345;
  height: 8px;
  width: 8px;
  position: relative;
  top: 14px;
  left: calc(100% - 10px - 8px);
}
.item-text-content-all {
  margin-left: 0.24rem;
  margin-right: 0.24rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 1.76rem;
}
.item-title-text {
  width: calc(100vw - 0.24rem - 0.24rem - 0.48rem);
  color: #333333;
  font-size: 0.34rem;
  margin-bottom: 0.12rem;
  text-overflow: ellipsis;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  &.has-img-width {
    width: calc(100vw - 0.24rem - 0.24rem - 0.48rem - 1.56rem);
  }
  &.selected-no-img-width {
    width: calc(100vw - 0.24rem - 0.24rem - 0.48rem - 0.6rem);
  }
  &.selected-has-img-width {
    width: calc(100vw - 0.24rem - 0.24rem - 0.48rem - 1.56rem - 0.6rem);
  }
}
.item-content-text {
  width: calc(100vw - 0.24rem - 0.24rem - 0.48rem);
  color: #979797;
  font-size: 0.28rem;
  margin-bottom: 0rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &.has-img-width {
    width: calc(100vw - 0.24rem - 0.24rem - 0.48rem - 1.56rem);
  }
  &.selected-no-img-width {
    width: calc(100vw - 0.24rem - 0.24rem - 0.48rem - 0.6rem);
  }
  &.selected-has-img-width {
    width: calc(100vw - 0.24rem - 0.24rem - 0.48rem - 1.56rem - 0.6rem);
  }
  &.has-dot-margin-bottom {
    margin-bottom: 0.2rem;
  }
}
</style>
