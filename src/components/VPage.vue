// 基础页面布局
/**
 *************************************************
 *  slot name="header"  fiexd 顶部标签(默认navbar) *
 *  **********************************************
 *  *                                            *
 *  *  可滚动容器                                  *
 *  *                                            *
 *  ***********************************************
 *  slot name="footer"  fiexd 底部标签(默认提交按钮) *
 **************************************************
 */
 
<template>
  <div class="container">
    <div class="section-header" v-if="headerHeight" >
      <slot name="header">
        <navbar 
          class="navbar"
          :isleftarrow="true" 
          :navBarTitle="navTitle" 
          v-if="!isWxmp && isShowNavBar" />
      </slot>
    </div>

    <div class="section-box">
      <slot></slot>
    </div>

    <div class="section-footer" v-if="footerHeight" >
      <slot name="footer">
          <div class="footer">
            <!-- <div class="button" @click="onSubmit" >{{btnTitle}}</div> -->
            <VButton
            class="VButton"
            type="highlighted"
            :disabled='btnDisabled'
            @click="onSubmit"
            >{{btnTitle}}</VButton> 
          </div>
      </slot>
    </div>
  </div>
</template>


<script setup>
import { defineProps, defineEmits } from 'vue';
import navbar from "@/components/navbar.vue";
import VButton from '@/components/VButton.vue';

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
    default: false
  },
});

const emit = defineEmits(['submit'])

function onSubmit() {
  emit("submit");
}

</script>


<style scoped lang="scss">
.container {
    width: 100%;
    height: 100%;

    background: var(--bg-color, v-bind(bg));

    .section-box{
      overflow-y: auto;

      padding-top: v-bind(headerHeight);
      padding-bottom: v-bind(footerHeight);
      // padding: 46px 0 84px;
    }

    .section-header, .section-footer {
      position: fixed;
      width: 100%;
    }

    .section-header {
      top: 0
    }

    .section-footer {
      bottom: 0;
    }
}


.footer{
    width: 100vw;
    height: v-bind(footerHeight);

    // border: 1px solid blue;
    // background-color: #FFFFFF;
    // background-color: orange;
    padding-top: 1px;
}
// .button{
//     height: 44px;
//     border-radius: 22px;
//     @include syn-btn-submit; 

//     margin: 8px 20px 34px;
// }

.VButton{
    width: calc(100vw - 40px);
    height: 44px;
    border-radius: 22px;
    @include syn-btn-submit; 

    margin: 8px 20px 34px;
}
</style>