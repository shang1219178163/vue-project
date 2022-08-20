
<template>
  <h1>{{ $route.meta.title }}</h1>
  <div class="flex">
    <div class="w-full h-auto relative">
      <p>Drop files into dropZone</p>
      <img src="/favicon.ico" alt="Drop me">

      <div ref="dropZoneRef" class="dropzone">
        <div> isOverDropZone: {{isOverDropZone}} /></div>
        <div class="flex flex-wrap justify-center items-center">
          <div v-for="(file, index) in filesData" :key="index" class="w-200px bg-black-200/10 ma-2 pa-6">
            <p>Name: {{ file.name }}</p>
            <p>Size: {{ file.size }}</p>
            <p>Type: {{ file.type }}</p>
            <p>Last modified: {{ file.lastModified }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useDropZone, BooleanDisplay } from '@vueuse/core'

const dropZoneRef = ref(null)
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

const filesData = ref([])

function onDrop(files) {
  console.log(files);
  console.log(JSON.stringify(files));

  filesData.value = [];
  if (files) {
    filesData.value = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }))
  }
}

</script>


<style scoped lang='scss'>
.dropzone {

  margin: 20px 0;

  width: 200px;
  height: 200px;
  border: 1px solid blue;

}

</style>
