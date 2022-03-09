<template lang="">
    <div 
    class="button"
    @click="click64">
        base64
    </div>
</template>
<script setup>

const click64 = () => {
    let str = "我是待编码的字符串"

    console.log(str)
    // let buffer = Buffer.from(str, 'utf-8')

    var base64Str = Buffer.from(str, 'utf-8').toString('base64')
    console.log('base64编码后的字符串: '+base64Str)

    let rawStr = Buffer.from(base64Str, 'base64').toString('utf-8')
    console.log('base64解码后的字符串: ',rawStr)


    let str1 = "18729742695"
    const a = encodeToBase64String(str1)
    const b = decodeBase64String(a)
    console.log({str1})

    console.log({a})
    console.log({b})

}

const encodeToBase64String = (val) => {
    return Buffer.from(`${val}`, 'utf-8').toString('base64')
}

const decodeBase64String = (val) => {
    return Buffer.from(`${val}`, 'base64').toString('utf-8')
}

</script>


<style scoped lang="scss">
    

.button{
    padding: 8px;
    margin: 8px;
}
</style>