<template>
    <div>
        <div>扩展方法测试</div>
        <button class="button" @click="onFlat">数组铺平</button>
    </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch, defineProps} from 'vue';
// import { Toast } from 'vant;


const onFlat = () => {
    const foods = [ [ '🍔', [ '🍫' ] ], [ '🍨', [ '🍿', [ '🍵' ] ] ] ]
    const result = foods.flat(Infinity) // ['🍔', '🍫', '🍨', '🍿', '🍵']
    console.log(result);
}



</script>


<style scoped lang='scss'>


@mixin textNowarp{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}

@mixin text3Nowarp{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

@mixin webkitScrolling{
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

@mixin positionCenter{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}

@mixin flexCenter{
    display: flex;
    justify-content: center;
    align-items: center;
}

.button{
    padding: 5px;
    margin: 8px;
}
</style>