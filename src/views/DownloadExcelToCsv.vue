<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <h2>{{tableTitle }}</h2>
  <div 
    class="header"
    v-for="(items, index) in tableRows" :key="index"
  >
    <div 
      class="row"
      v-for="(item, index) in items" :key="index"
    >
      {{ item }}
    </div>
  </div>
  
  <div>
    <button @click="downloadCsv">downloadCsv</button>
  </div>
</template>


<script setup>
import { ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

const tableTitle = ref('技术部员工列表');

const tableRows = reactive([
  ['姓名', '手机号','部门'], // 第一行就是表格表头
  ['尤与西','131xxxx','技术部'],
  ['阮易枫','158xxxx','技术部'],
  ['廖学丰','189xxxx','技术部']
]);

const downloadCsv = async () => {
  let CsvString = tableRows.map(data => data.join(',')).join('\r\n');
  // 加上 CSV 文件头标识
  CsvString = 'data:application/vnd.ms-excel;charset=utf-8,\uFEFF' + encodeURIComponent(CsvString);
  // 通过创建a标签下载
  const link = document.createElement('a');
  link.href = CsvString;
  // 对下载的文件命名
  link.download = `${tableTitle.value}.csv`;
  // 模拟点击下载
  link.click();
  // 移除a标签
  link.remove();
};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>
.header{
  display: flex;
  justify-content: space-evenly;

  padding: 8px;

  font-weight: PingFangSC-Regular;

  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.row{
  // border: 1px solid rgba(0, 0, 0, 0.3);

}
</style>