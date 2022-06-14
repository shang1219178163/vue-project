<template>
  <navbar
    class="box-navbar"
    v-if="hasNavBar"
    navBarTitle="家装分期"
    isleftarrow
    closeWebview
    isFixed
  />
  <div :class="['box-fixed', hasNavBar ? 'hasNavBar' : '']">
    <van-tabs
      sticky
    >
      <van-tab title="装修图纸">
        <div class="page">
          <van-cell
            v-for="(item, index) in 20" :key="index" 
            is-link 
            @click="click(index)"
          >
          装修图纸 {{index}}
          </van-cell>
        </div>
      </van-tab>
      <van-tab title="物料清单">
        <button>物料清单</button>
      </van-tab>
      <van-tab title="人员清单">
        <button>人员清单</button>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script setup>
import navbar from '@/components/navbar.vue';

import { getCurrentInstance, ref, reactive, computed, onMounted, } from 'vue';
// import { Toast } from 'vant';

const currentInstance = getCurrentInstance();
const { $platform, $uplus, $log: LOG } = currentInstance.appContext.config.globalProperties;


const props = defineProps({
  showNavBar: {
    type: Boolean,
    default: true
  },
});

const hasNavBar = computed(() => {
  // return false;//add test
  return !$platform.isWxmp && props.showNavBar;
});

const navbarH = computed(() => {
  return hasNavBar.value ? '46px' : '0px';
});

const click = (val) => {
  console.log(val);
};

</script>


<style scoped lang='scss'>

$navH: v-bind(navbarH);
$tabH: 44px;
$spacing: 8px;

.box-fixed{
  position: fixed;
  top: $navH;

  width: 100%;
  height: calc(100% - $navH);

  background: var(--bg-color);
}

.page{
  position: fixed;
  overflow-y: auto;

  width: 100%;
  height: calc(100% - $tabH - $navH - $spacing * 2) ;

  padding: $spacing 0;
}

</style>