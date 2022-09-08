<template>
    <van-nav-bar title="自定义指令" left-arrow  @click-left="onClickLeft"/>
    <h1># 自定义指令</h1>
    <!-- <p v-pin="200" v-randomcolor >Stick me 200px from the top of the page</p> -->
    <!-- <div v-font-size="'large'">ffff</div>
    <div v-font-size="'huge'">gggg</div>
    <input type="text" v-focus />
    <div v-demo="{ color: 'white', text: 'hello!' }">v-demo</div>
    <div v-demo="'zzz'" v-random-color>zzz_v-demo</div>
    <p v-random-color>Hello World</p>
    <p v-border-color>bordercolor</p>
    <div v-border-color>bordercolor1111</div> -->
    <!-- <h1># my-tab</h1>
    <my-tab
        :tabData="tabData"
        :initailIndex="initailIndex"
    >
    </my-tab> -->
    <MyTabSelect
        :list="list"
        :initailIndex="initailIndex"
        >
    </MyTabSelect>
    <MyItemSelect
        :list="list"
        :initailIndex="initailIndex"
        >
    </MyItemSelect>

    <div class="tab">
        <div class="tab-item" @click="tabValueChanged(0)">
            <div class="text">选项1</div>
            <div :class="['indicator', {'active': tabIdx == 0}]"></div>
        </div>
        <div class="tab-item" @click="tabValueChanged(1)">
            <div class="text">选项2</div>
            <div :class="['indicator', {'active': tabIdx == 1}]"></div>
        </div>
        <div class="tab-item" @click="tabValueChanged(2)">
            <div class="text">选项3</div>
            <div :class="['indicator', {'active': tabIdx == 2}]"></div>
        </div>
    </div>
    
    <div class="tab">
        <div class="tab-item" @click="tabValueChanged(0)">
            <div class="text">选项1</div>
            <div :class="['indicator', {'active': tabIdx == 0}]"></div>
        </div>
        <div class="tab-item" @click="tabValueChanged(1)">
            <div class="text">选项2</div>
            <div :class="['indicator', {'active': tabIdx == 1}]"></div>
        </div>
        <div class="tab-item" @click="tabValueChanged(2)">
            <div class="text">选项3</div>
            <div :class="['indicator', {'active': tabIdx == 2}]"></div>
        </div>
    </div>

    <div class="box">
        <div class="items">
            <div class="item">
                <div v-for="(item, index) in list" :key="index"
                @click="clickText(index)"
                >
                {{ item.title }}    
                </div>
                <div class="line"></div>
            </div>
        </div>
    </div>


    <button v-has.xxx="'create'" @click="createTest">create</button>
    <button v-has:[arg]="'delete'" @click="clickDelete">delete</button>
    <!-- <button v-has="'update'">update</button>
    <button v-has="'read'">read</button> -->

</template>


<script setup>
import { ref, getCurrentInstance } from 'vue';
import MyTab from '@/components/MyTab.vue';
import MyTabSelect from '../components/MyTabSelect.vue';
import MyItemSelect from '../components/MyItemSelect.vue';


const onClickLeft = () => history.back();

// const instance = getCurrentInstance();
// console.log(instance.type.__file);

const props = defineProps({
    list: {
        type: Array,
        // eslint-disable-next-line vue/require-valid-default-prop
        default: [
            { id: 1, title: "选项1", content: "内容1", },
            { id: 2, title: "选项2", content: "内容2", },
            { id: 3, title: "选项3", content: "内容3", },
            { id: 4, title: "选项4", content: "内容4", },
            { id: 5, title: "选项5", content: "内容5", },
            { id: 6, title: "选项6", content: "内容6", },
        ],
    },
    initailIndex: {
        type: [Number, String],
        default: 1
    }
})


const tabIdx = ref(0)


const tabValueChanged = (idx) => {
    console.log(idx);
    tabIdx.value = idx
}

const clickText = (val) => {
    console.log(val);
    tabIdx.value = val
}


const createTest = () => {
  try {
    localStorage.setItem('permsssion', JSON.stringify(['create', 'delete']));
  } catch (error) {
    console.log(error);
  }

  const tmp = localStorage.getItem('permsssion');
  console.log('tmp', tmp);
}

const arg = ref("aaa")

const clickDelete = (val) => {
  arg.value += 'a'
}

</script>


<style scoped lang="scss">

.box{
    /* width: 100vw; */
    border: 1px solid blue;

    margin-top: 20px;

    display: flex;
    /* flex-direction: row; */
}

.items{
    /* margin: 0px;
    background-color: aqua;

    display: flex;
    flex-direction: row;
    justify-content: space-around; */
        display: flex;

}
.item{
    margin: 10px;
    background-color: yellow;

    width: 80px;
    /* display: flex;
    flex-direction: column; */
}

.line{
    width: 15px;
    height: 1.5px;
    background-color: red;

    margin-left: 200px;
}

.tab{
    display: flex;
    justify-content: space-around;
}
.tab-item{
    width: 30%;
    border: 1px solid blue;

    display: flex;
    flex-direction: column;
    /* align-items: center; */

    justify-content: center;
    align-items: center;
}


.text{
    text-align: center;

}

.indicator{
    width: 20px;
    height: 1.5px;
    background-color: red;
    background-color: transparent;

    &.active{
        height: 4px;
        // background-color: blue;
        background-image: linear-gradient(90deg, #FFC800 2%, rgba(255,200,0,0.00) 100%);
    }

    /* margin-left: 200px; */
}
</style>