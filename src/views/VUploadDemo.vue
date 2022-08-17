<template>
  <div>
    <h1>VUploadPlaceholder</h1>
    <!-- <VUpload
        title="设计"
        @change="onChange"
        >
            <template #subtitle>
                <div>
                    <button>button</button>
                </div>
            </template>
            <template #footer>
                <div>
                    <button>button1</button>
                </div>
            </template>
        </VUpload> -->

    <label for="avatar">选择图片:</label>
    <input
      type="file"
      id="avatar"
      name="avatar"
      accept="image/*"
      multiple
      @change="onChange($event.target.files)"
    />

  <!-- <VUploadPlaceholder
        :src="require('@/assets/images/icon_camera.png')"
        title="（最多6张）"
        @click="click"
      >
      </VUploadPlaceholder>
      <div class="section1">
        <VUploadPlaceholder v-for="(item, index) in 6" :key="index"
          :src="require('@/assets/images/icon_camera.png')"
          title="（最多6张）"
          @click="click(index)"
        >
        </VUploadPlaceholder>
      </div> -->
  </div>
</template>

<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch} from "vue";
// import { Toast } from 'vant;

const onRefresh = async () => {};

const click = async (val) => {
  console.log("click", val);
};

const images = ref([]);

const onChange = (files) => {
  images.value = Array.from(files);
  console.log(images.value);
  // images.value = val.map((e) => e.image);
  // LOG.log('fileList', images);
};

const onUpload = (val) => {
  console.log(JSON.stringify(val));
  // images.value = val.map((e) => e.image);
  // LOG.log('fileList', images);
};
</script>

<style scoped lang="scss">
@mixin flex-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

@mixin flex-column-center {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.section1 {
  @include flex-wrap;
}
</style>
