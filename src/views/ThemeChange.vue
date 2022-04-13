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



};

const onChangeColor = () => {
    // document.body.style.setProperty('--themeColor', '#ff0000');
    const color = randomcolor();
    console.log(">>>color", color);
    document.body.style.setProperty('--theme-color', color);
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