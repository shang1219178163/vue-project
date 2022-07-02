// 基础页面布局 /** ************************************************* * slot
name="header" fiexd 顶部标签(默认navbar) * *
********************************************** * * * * * 可滚动容器 * * * * *
*********************************************** * slot name="footer" fiexd
底部标签(默认提交按钮) * ************************************************** */

<template>
  <div class="container">
    <div class="section-header" v-if="headerHeight">
      <slot name="header">
        <navbar
          class="navbar"
          :isleftarrow="true"
          :navBarTitle="navTitle"
          v-if="!isWxmp && isShowNavBar"
        />
      </slot>
    </div>

    <div class="section-box">
      <slot></slot>
    </div>

    <div class="section-footer" v-if="footerHeight">
      <slot name="footer">
        <div class="footer">
          <VButton
            class="VButton"
            type="highlighted"
            :disabled="btnDisabled"
            @click="submit"
            >{{ btnTitle }}</VButton
          >
          <!-- <button
            :class="['button', {'disabled': btnDisabled}]"
            @click="submit"
            >{{btnTitle}}
            </button> -->
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import navbar from "@/components/navbar.vue";
// import VButton from '@/components/VButton.vue';

defineProps({
  isShowNavBar: {
    type: Boolean,
    default: true,
  },
  headerHeight: {
    type: String,
    default: "46px",
  },
  footerHeight: {
    type: String,
    default: "86px",
  },
  bg: {
    type: String,
    default: "#F6F6F6",
  },
  navTitle: {
    type: String,
    default: "标题",
  },
  btnTitle: {
    type: String,
    default: "提交",
  },
  btnDisabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["submit"]);

function submit() {
  emit("submit");
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;

  background: var(--bg-color, v-bind(bg));
  display: flex;
  flex-direction: column;

  .section-box {
    overflow-y: auto;

    padding-top: v-bind(headerHeight);
    // padding-bottom: v-bind(footerHeight);
    // padding: 46px 0 84px;
    width: 100vw;
    height: calc(100vh - v-bind(headerHeight) - v-bind(footerHeight));

    display: flex;
    flex-direction: column;

    background-color: var(--bg-color, #f6f6f6);
  }

  .section-header {
    position: fixed;
    width: 100%;

    top: 0;
    z-index: 999990;
  }

  .section-footer {
    // position: fixed;
    width: 100%;
    height: v-bind(footerHeight);

    bottom: 0;
    // z-index: 0;
  }
}

.footer {
  width: 100vw;
  height: v-bind(footerHeight);

  // border: 1px solid blue;
  background-color: #ffffff;
  // background-color: orange;
  padding-top: 1px;
}

.VButton {
  width: calc(100vw - 40px);
  height: 44px;
  border-radius: 22px;
  @include syn-btn-submit;

  margin: 8px 20px 34px;
}

.button {
  width: calc(100vw - 40px);
  height: 44px;
  border-radius: 22px;
  @include syn-btn-submit;

  margin: 8px 20px 34px;

  border: 1px solid transparent;
  &.disabled {
    // opacity: 0.4; //有选择图片的弹窗时,会图层错位
    background: rgba(190, 150, 90, 0.4);
  }
}
</style>
