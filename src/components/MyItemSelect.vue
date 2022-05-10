<template>
    <h1>单选/多选 v-item-select</h1>
    <div>
        <div v-item-select="{
            itemClass: 'item',
            selectClass: 'item-select',
            currentIndex: currentIdx,
            isMultiple: true,
            min: 1,
            max: 5,
            list: list,
            minblock: minblock,
            maxblock: maxblock,
            block: block,
            }">
            <a
                class='item'
                v-for="(item, idx) in list" :key="idx"
                @click="changeItem(idx)"
                >
                {{item.title}}
            </a>
        </div>    
    </div>
</template>


<script setup>
import { Toast } from 'vant';
import { ref, reactive, getCurrentInstance, computed } from 'vue';


const instance = getCurrentInstance();
console.log(instance.type.__file, instance);

const props = defineProps({
    list: {
        type: Array,
        // eslint-disable-next-line vue/require-valid-default-prop
        default () {
            return [];
        },
    },
    initailIndex: {
        type: [Number, String],
        default: 0
    }
})

const currentIndex = ref(props.initailIndex);

const currentContent = computed(() => {
   return props.list[currentIndex.value].content;
})


const changeIndex = (index) => {
    currentIndex.value = index;
}


const currentIdx = ref(props.initailIndex);

const selectItems = reactive([props.list[props.initailIndex]])

const changeItem = (idx) => {
    currentIdx.value = idx;
    // console.log(currentIdx.value, selectIndexs);
    console.log(instance.type.__file, currentIdx.value, selectItems);
}

const block = (indexs, items, idx) => {
    console.log("block", instance.type.__file, indexs, items.map((e) => {
        return e.title
    }));
}

const minblock = (val) => {
    Toast(`数量不能小于 ${val}`)
}

const maxblock = (val) => {
    Toast(`数量不能大于 ${val}`)
}

</script>


<style scoped lang="scss">
    
a{
    font-size: 1rem;
    margin: 8px;
    &.active{
        margin: 8px;
        text-decoration: none;
        color: #000;
        // border: 1px solid #000;
        border-bottom: 1.5px solid #000;
    }
}

// .item{
//     &.item-select{
//         color: red;
//         // border-bottom: 1.5px solid #000;
//         text-decoration: underline;
//     }
// }

.item{
    margin: 8px;

    color: red;
}

.item-select{
    border: 1.5px solid #000;
}

</style>