<template>
  <!-- <div class='container'> -->
    <van-nav-bar title="主题切换" 
    left-arrow  
    @click-left="onClickLeft"
    right-text="选择"
    @click-right="onClickRight"
    />
    <div class="text">sadfsadf</div>
    <button class="button" @click="onChangeColor">Change color</button>
    <button class="button" @click="onChangeBgColor">Change bgColor</button>
  <!-- </div> -->
</template>


<script setup>

import randomcolor from '../utils/random';


const onClickLeft = () => history.back();

const onClickRight = () => {
    let themeColor = document.body.style.getPropertyValue('--theme-color') || getComputedStyle(document.body).getPropertyValue('--theme-color')
    console.log(">>>themeColor:", themeColor);
};

const onChangeColor = () => {
    // document.body.style.setProperty('--themeColor', '#ff0000');
    const color = randomcolor();
    console.log(">>>color", color);
    document.body.style.setProperty('--theme-color', color);

    const token = ""
    const token1 = undefined
    const token2 = null

    console.log(">>>token:", token ? "true" : "false");
    console.log(">>>token1:", token1 ? "true" : "false");
    console.log(">>>token2:", token2 ? "true" : "false");
    console.log(">>>Array.isArray(token1)", Array.isArray(token1));
    console.log(">>>Array.isArray(token2)", Array.isArray(token2));

    const {a, d} = {a: 1, b: 2, c:3, d: 4};
    console.log(">>>a:", a, d);

};

const onChangeBgColor = () => {
    // document.body.style.setProperty('--themeColor', '#ff0000');
    const bgcolor = randomcolor();
    console.log(">>>bgcolor", bgcolor);
    document.body.style.setProperty('--bg-color', bgcolor);
};

</script>


<style scoped lang='scss'>

.container{
    margin: 10px;
    // padding: 8px;
    
    display: flex;
    flex-direction: column;
}

.text{
    color: var(--theme-color);
    background: var(--bg-color);
}

.button{
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>