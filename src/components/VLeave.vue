<template>
    <div class="container">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="leave">
            <slot>剩余视图高度</slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    height: {
        type: String,
        default: "'100vh'"
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
	// height: v-bind(height);
	height: inherit;

	border: 1px dashed orange;
}

.header {
    width: 100vw;
}

.footer {
    width: 100vw;
}

.leave {
	flex: 1;

    flex-direction: column;

	background-color: darkcyan;
    @include flex-center;
}
</style>