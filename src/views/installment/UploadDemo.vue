<template>
  <div>
    <navbar
    v-if="!isWxmp"
    isleftarrow
    navBarTitle="上传图片demo" 
    />
    <VUpload
      margin="0px 12px"
      padding="16px"
      radius="8px"
      title="上传照片"
      subtitle="请上传清晰完整的图片，以便师傅携带对应工具."
      footerTitle="*温馨提示：如果在保修范围外会产生费用."
      @change="onChange"
    >
    </VUpload>
  </div>
</template>


<script setup>
import navbar from "@/components/navbar.vue";

import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;

const currentInstance = getCurrentInstance();
const { $uplus, $log: LOG, $vtoast } = currentInstance.appContext.config.globalProperties;
// LOG.log(currentInstance.type.__file);

const images = ref([]);

const onChange = (val) => {
  images.value = val.map((e) => e.image);
  LOG.log("fileList", images);
};


</script>


<style scoped lang='scss'>

</style>