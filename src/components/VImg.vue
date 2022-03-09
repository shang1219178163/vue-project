<template>
    <div :class="['container', align]">
        <slot name="tag">
            <div class="tag" 
            @click="clickTag" 
            v-if="text"
            >{{ text }}</div>
        </slot>
        <slot>
            <img
            :src="src"
            :width="width"
            :height="height"
            style="object-fit: contain;"
            @click="click" 
            v-if="src"
            />
        </slot>
        <!-- <van-image :src="require('../assets/images/no_data.png')" /> -->
    </div>
</template>


<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: "标签",
    },
    /// leftTop, leftBom, rightTop, rightBom
    align: {
        type: String,
        default: "topLeft",
    },
    src: {
        type: String,
        default: ""
    },
    width: {
        type: Number,
        default: Number.MAX_VALUE
    },
    height: {
        type: Number,
        default: Number.MAX_VALUE
    },

})

const emit = defineEmits(['clickTag',])

const clickTag = () => {
    emit('clickTag', props.text)
}

</script>

<style scoped lang="scss">

.container{
    border: 1px solid blue;

    &.topLeft {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    &.topCenter {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    &.topRight {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
    }

    &.center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &.centerLeft {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    &.centerRight {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }


    &.bottomLeft {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
    }

    &.bottomRight {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    &.bottomCenter {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
}

.tag{
    position: absolute;
    padding: 4px 10px 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: red;
    background-image: linear-gradient(129deg, #FEC658 0%, #FE9428 99%);
    border-radius: 4px;
}

</style>