<template>
	<div>
	<div v-for="item in 9" 
	:key="item" 
	data-md-name="div" 
	:data-md-value="item"
	@click="onClick(item)"
	>点击我,进行埋点测试{{ item }}</div>
		<!-- <div data-md-name="测试按钮" data-value="222">测试，点击我进行埋点</div>
		<div>测试，点击我进行埋点111</div> -->
	</div>
</template>


<script setup>

const onClick = (val) => {
	console.log("onClick", val);
}

</script>