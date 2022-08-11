<template>
	<div>
    <navbar
      class="nav-bar"
      v-if="!isWxmp"
      navBarTitle="埋点demo"
      isleftarrow
      closeWebview
      isFixed
    />
    <div 
      v-for="item in 9" 
      :key="item" 
      :data-track="JSON.stringify({
        name: 'div',
        value: item,
        type: 'click'
      })"
      @click="onClick(item)"
    >点击我,进行埋点测试{{ item }}
    </div>
		<!-- <div data-md-name="测试按钮" data-value="222">测试，点击我进行埋点</div>
		<div>测试，点击我进行埋点111</div> -->
	</div>
</template>


<script setup>
import navbar from '@/components/navbar.vue';

import { ref, computed } from 'vue';

const dtParams = computed(() => (val) => {
  let params = {
    name: "div", 
    value: val,
  };
  return JSON.stringify(params);
});

// const dtParams = (val) => {
//   let params = {
//     name: "div", 
//     value: val,
//   };
//   return JSON.stringify(params);
// };

const onClick = (val) => {
	console.log("onClick", val);
}

</script>