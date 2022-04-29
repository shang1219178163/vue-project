<template> 
    <h1>动态class</h1>
    <div>{{ count }}</div>
    <button @click="add">add</button>

    <div>
      <span class="icon" :class="this.classMap[this.count]">icon</span>
      <span class="text">class: {{this.classMap[this.count]}}</span>
    </div>
</template>


<script setup>
import { ref, getCurrentInstance } from 'vue';


const instance = getCurrentInstance()
console.log(instance);

const count = ref(0)

const add = () => {
    count.value++;
    if (count.value > 6) {
        count.value = 0
    }
}

const classMap = {
    0: "red",
    1: "orange",
    2: "yellow",
    3: "green",
    4: "cyan",
    5: "blue",
    6: "purple",
}


</script>


<style lang="scss">

span{
    margin: 5px;
}
    
.red{
    background-color: red;
}

.orange{
    background-color: orange;
}

.yellow{
    background-color: yellow;
}

.green{
    background-color: green;
}

.cyan{
    background-color: cyan;
}

.blue{
    background-color: blue;
}

.purple{
    background-color: purple;
}

</style>