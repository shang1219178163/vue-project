<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <!-- <VSearch
    :text="text"
    :options="list"
    :onSelect="onSelect"
  >
  </VSearch> -->

  <!-- <input list="source" id="ipt" />
		<datalist id="source">
		    <option value="html5"></option>
		    <option value="css3"></option>
		    <option value="js"></option>
		    <option value="jquery"></option>
		    <option value="node"></option>
		</datalist>

  <select>
    <option value="" disabled selected hidden>--请选择地区--</option>
    <option value="">北京</option>
    <option value="">河北</option>
    <option value="">河南</option>
    <option value="">山东</option>
    <option value="">江苏</option>
    <option value="">上海</option>
</select> -->

  <div class="section">
    <button type="button">button</button>
  </div>

  <div class="pwd-box">
    <VSearch
      :text="text"
      :options="list"
      :onSelect="onSelect"
      :onChange="onChange"
    >
    </VSearch>
    <div class="pwd">
      
    </div>
  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

const items = Array(23).fill().map((e, i) => `选择${i}`);

const itemsNew = items.map((e, i) => ({
    text: e,
  })
);

let list = reactive(itemsNew);

const text = ref('');

const isExpand = ref(true);

const onSelect = (item, index) => {
  console.log(`onSelect:${item}`);
  text.value = item.text;
};

const onChange = (val) => {
  console.log(`onChange:${val}`);
};

</script>


<style scoped lang='scss'>
.section{
  height: 200px;
}

.pwd-box{
  display: flex;
  flex-direction: column;
}
.pwd{
  height: 45px;
  background-color: yellow;
}
</style>