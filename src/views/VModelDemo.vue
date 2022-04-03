<template>
    <div class="content">
        <h1>自定义双向绑定 v-model</h1>
        <div>
            BInput: <BInput v-model="user" label="请输入"></BInput>
        </div>
        <div>
            BCheckbox: <BCheckbox v-model="checked" ></BCheckbox>
        </div>
        <hr />
        <div>
            BaseInput: <BaseInput :value="user" @input="user = $event" ></BaseInput>
        </div>
        <div>
            BaseCheckbox: <BaseCheckbox :checked="checked" @change="checked = $event" ></BaseCheckbox>
        </div>
        <span> {{ user }} {{ checked ? "已阅读用户" : "未阅读用户协议" }} </span> -->
        <button @click="onClick">确定</button>
    </div>
</template>


<script setup>
import {getCurrentInstance, ref, reactive, onMounted, watch, defineProps} from 'vue';
// import { Toast } from 'vant;
import { useRouter, useRoute } from 'vue-router';

import BInput from '@/components/vmodel/BInput.vue';
import BCheckbox from '@/components/vmodel/BCheckbox.vue';

import BaseInput from '@/components/vmodel/BaseInput.vue';
import BaseCheckbox from '@/components/vmodel/BaseCheckbox.vue';

const name = ref("账户: ")
const pwd = ref("密码: ")

const user = ref("xiao ming")
const checked = ref(true)

const boxText = ref("我已阅读过<<用户协议>>.")


const numbers = reactive([1, 2, 3, 4])

watch(() => [user.value, checked.value], (newValues, oldValues) => {
    console.log(">>> message checked:", newValues, oldValues)

})

const onClick = () => {
    console.log(">>>user: ", user.value)
    console.log(">>>checked: ", checked.value)
}

</script>


<style scoped lang='scss'>

.content{
    margin: 15px;
}
</style>