<template>
	<div>
	<div v-for="item in 10" 
	:key="item" 
	data-md-name="div" 
	:data-value="item">点击我,进行埋点测试{{ item }}</div>
		<!-- <div data-md-name="测试按钮" data-value="222">测试，点击我进行埋点</div>
		<div>测试，点击我进行埋点111</div> -->
	</div>
</template>
<script>
export default {
	methods: {}
}
</script>