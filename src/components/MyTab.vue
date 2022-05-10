<template>
    <div>
        <div v-tab-select="{
        tabClass: 'tab-item',
        activeClass: 'active',
        currentIndex
        }">
            <!-- <a href="javascript:;"
                :class="['tab-item', {'active': index === currentIndex}]"
                v-for="(item, index) in tabData" :key="item.id"
                @click="changeIndex(index)"
            >{{item.title}}</a> -->
            <a href="javascript:;"
                class='tab-item'
                v-for="(item, index) in tabData" :key="item.id"
                @click="changeIndex(index)"
            >{{item.title}}</a>
        </div>

    </div>
    <!-- <div>
        <div v-tab-select="{
            tabClass: 'item',
            activeClass: 'item-select',
            currentIndex: currentIdx
        }">
            <a href="javascript:;"
                class='item'
                v-for="(item, idx) in list" :key="idx"
                @click="changeItem(idx)"
                >
                {{item}}
            </a>
        </div>    
    </div> -->
    <h1>单选/多选 v-item-select</h1>
    <div>
        <div v-item-select="{
            itemClass: 'item',
            selectClass: 'item-select',
            currentIndex: currentIdx,
            isMultiple: true,
            min:2,
            max: 5
            }">
            <a
                class='item'
                v-for="(item, idx) in list" :key="idx"
                @click="changeItem(idx)"
                >
                {{item}}
            </a>
        </div>    
    </div>
</template>


<script setup>
import { ref, reactive, getCurrentInstance, computed } from 'vue';

const instance = getCurrentInstance();
console.log(instance.type.__file, instance);

const props = defineProps({
    tabData: {
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
   return props.tabData[currentIndex.value].content;
})


const changeIndex = (index) => {
    currentIndex.value = index;
}


const list = reactive(Array(10).fill().map((e, i)=> `item_${i}`))
const currentIdx = ref(props.initailIndex);

const selectIndexs = reactive([])

const changeItem = (idx) => {
    selectIndexs.push(idx);
    currentIdx.value = idx;
    // console.log(currentIdx.value, selectIndexs);
    console.log(instance.type.__file, currentIdx.value);
    
}


// let warn = alert
// window.alert = (t) => {
//     if (confirm('How are you?')) warn(t)
// }

// alert('Help me...!!!')

</script>


<style scoped lang="scss">
    
a{
    font-size: 1rem;
    margin: 8px;
    &.active{
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

    // display: flex;
    // flex-direction: row;
    // flex-wrap: warp;
    // width: 60px;
}

.item-select{
    border: 1.5px solid #000;
}

</style>