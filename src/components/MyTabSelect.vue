<template>
    <h1>单选 my-tab-select</h1>
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
                    v-for="(item, index) in list" :key="item.id"
                    @click="changeIndex(index)"
                >{{item.title}}</a>
        </div>
        <div>
            <p>{{currentContent}}</p>
        </div>
    </div>
    <div>
        <div v-tab-select="{
            tabClass: 'item',
            activeClass: 'item-select',
            currentIndex: currentIdx
        }">
            <a href="javascript:;"
                class='item'
                v-for="(item, idx) in sexList" :key="idx"
                @click="changeItem(idx)"
                >
                {{item}}
            </a>
        </div>    
    </div>
</template>


<script setup>
import { ref, reactive, getCurrentInstance, computed, defineProps } from 'vue';

// const instance = getCurrentInstance();
// console.log(instance.type.__file, instance.props);

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


const sexList = reactive(["男", "女"])
const currentIdx = ref(props.initailIndex);

const changeItem = (idx) => {
    currentIdx.value = idx;
    console.log(currentIdx.value);
}


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

.item-select{
    border: 1.5px solid #000;
}

</style>