<template>
    <div class="container">
        <slot>
            <div class="item" v-if="title">{{ title }}</div>
        </slot>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: "VWarp"
    },
})


</script>


<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.item {
  margin: 8px;
  padding: 8px;
  border: 1px solid red;
}

</style>