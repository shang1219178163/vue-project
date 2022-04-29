<template>
    <div ref="root1">
        <van-cell-group title="useClickAway">
            <div ref="root" @click='click'>root</div>
        </van-cell-group>

        <van-cell-group title="useCountDown">
            <span>Total time：{{ current.total }}</span>
            <span>Remain days：{{ current.days }}</span>
            <span>Remain hours：{{ current.hours }}</span>
            <span>Remain minutes：{{ current.minutes }}</span>
            <span>Remain seconds：{{ current.seconds }}</span>
            <span>Remain milliseconds：{{ current.milliseconds }}</span>
        </van-cell-group>

        <van-cell-group title="useCustomFieldValue">
            <van-form>
            <van-field name="my-field" label="Custom Field">
                <template #input>
                <!-- <my-component /> -->
                <input />
                </template>
            </van-field>
            </van-form>
        </van-cell-group>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { 
    useRect, 
    useWindowSize,
    useToggle,
useClickAway, 
useCountDown, 
useCustomFieldValue, 
usePageVisibility } from '@vant/use';

const { width, height } = useWindowSize();

console.log(width.value); // -> 窗口宽度
console.log(height.value); // -> 窗口高度

watch([width, height], () => {
    console.log('window resized', width.value, height.value);
});


onMounted(() => {
    const rect = useRect(root);
    console.log(rect); // -> 元素的大小及其相对于视口的位置
});

const click = () => {
    console.log("click")
}

const root = ref();
useClickAway(root, () => {
    console.log('click outside!');
});

const countDown = useCountDown({
time: 24 * 60 * 60 * 1000,
});

countDown.start();

const current = computed(() => {
    return countDown.current
})


const myValue = ref(0);
useCustomFieldValue(() => myValue.value);


const pageVisibility = usePageVisibility();
watch(pageVisibility, (value) => {
    console.log('visibility: ', value);
});



const [state, toggle] = useToggle();

toggle(true);
console.log(state.value); // -> true

toggle(false);
console.log(state.value); // -> false

toggle();
console.log(state.value); // -> true



</script>
