<template>
  <div class='container'>
    <van-nav-bar title="主题切换" left-arrow  @click-left="onClickLeft"/>
    <div class="text">sadfsadf</div>
    <button class="button" @click="onChangeColor">Change color</button>
    <button class="button" @click="onChangeBgColor">Change bgColor</button>
  </div>
</template>


<script setup>
import randomcolor from '../utils/random';


const onClickLeft = () => history.back();

const onChangeColor = () => {
    // document.body.style.setProperty('--themeColor', '#ff0000');
    const color = randomcolor();
    console.log(">>>color", color);
    document.body.style.setProperty('--themeColor', color);
};

const onChangeBgColor = () => {
    // document.body.style.setProperty('--themeColor', '#ff0000');
    const bgcolor = randomcolor();
    console.log(">>>bgcolor", bgcolor);
    document.body.style.setProperty('--themeBgColor', bgcolor);
};

</script>


<style scoped lang='scss'>

.container{
    margin: 10px;
    // padding: 8px;
}

.text{
    color: var(--themeColor);
    background: var(--themeBgColor);

}

.button{
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>