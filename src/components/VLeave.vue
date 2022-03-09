<template>
    <div class="container">
        <div class="top">
            <slot>顶部视图</slot>
        </div>
        <div class="leave">
            <slot>剩余视图高度</slot>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    height: {
        type: String,
        default: "'500px'"
    },
    topHeight: {
        type: String,
        default: "'200px'"
    },
})

</script>

<style scoped lang="scss">
    
@mixin flex-center{
    display:flex; 
    justify-content:center;
    align-items:center;
}


.container{
	display: flex;
	flex-flow: column nowrap;
	height: v-bind(height);
	border: 1px dashed orange;
}

.top {
	flex-basis: v-bind(topHeight);
    // flex-basis: 100px;
	background-color: lightblue;

    @include flex-center;
}

.leave {
	flex: 1;
	background-color: darkcyan;

    @include flex-center;
}
</style>