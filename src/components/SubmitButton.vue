<template>
    <div>
        <button type="submit">
            <slot>确定</slot>
        </button>
    </div>
</template>

<script>
export default {
    name:"submit-button",
    data() {},
    created(){
        console.log("submit-button")
    }
}
</script>
<style  scoped>

</style>