<template>
     <!-- <suspense> -->
        <div class="container">
            <van-nav-bar title="物料清单" 
            left-arrow  
            @click-left="onClickLeft" 
            right-text="请求" 
            @click-right="onClickRight" 
            v-if="props.isShowNavBar"
            />
            <!-- <van-pull-refresh v-model="loading" @refresh="onRefresh"> -->
            <vcard 
                :margin="'12px'" 
                :padding="'19px 8px 19px'" 
                :borderRadius="'8px'"
                >
                <div class="group">
                    <div class="header">
                        <div class="header-left">
                            <div class="header-left-line"></div>
                            <span class="header-left-title">报价清单</span>
                        </div>
                        <div>
                            <div class="header-right">
                                总价: {{this.totalPrice}}
                            </div>
                        </div>
                    </div>   
                    <table rules=none>
                        <thead>
                            <tr>
                                <td>序号</td>
                                <td>商品名称</td>
                                <td>数量</td>
                                <td>单价</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(e, i) in list" :key="e.id">
                                <td>{{i}}</td>
                                <td>{{e.name}}</td>
                                <td>{{e.count}}</td>
                                <td>{{e.unitPrice}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </vcard>
        <!-- </van-pull-refresh>  -->
    </div>
    <!-- </suspense> -->
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import { Toast } from 'vant';
// import { Promise } from 'es6-promise';
// import vcard from '@/components/VCard.vue';

const props = defineProps({
    isShowNavBar: {
        type: Boolean,
        default: true
    }
})

const currentInstance = getCurrentInstance()
const { $api } = currentInstance.appContext.config.globalProperties

const onClickLeft = () => history.back();
const loading = ref(false);
const onRefresh = () => {
    setTimeout(() => {
        Toast('刷新成功');
        loading.value = false;
    }, 1000);
};

const onClickRight = (async () => {
    getToken()
})

const list = [
    {name: '像素地板', unit: '', unitPrice: '1800', count: '200', urls: '', desc: '', id:'0'},
    {name: '我的家油漆', unit: '', unitPrice: '2000', count: '30', urls: '', desc: '', id:'1'},
    {name: '木门', unit: '', unitPrice: '2122', count: '2', urls: '', desc: '', id:'2'},
    {name: '客厅地砖', unit: '', unitPrice: '3222', count: '300', urls: '', desc: '', id:'3'},
    ]

const totalPrice = "256600.00"

const getToken = async () => {
    console.log("getToken")
    // try {
    //     // console.log('api', $api)
    //     let res = await $api["login.getToken"]()
    //     if (res && res.access_token) {
    //         console.log(res)
    //     }
    // } catch (error) {
    //     console.log(error)
    // }

    $api["login.getToken"]({page: 2, num: "30"}).then((result) => {
        console.log(result)
        // alert(JSON.stringify(result))
    }).catch((err) => {
        console.log(err)
    });

    // getTokenRes.then((result) => {
    //     alert(JSON.stringify(result))
    // }).catch((err) => {
    //     console.log(err)
    // });

    // $api["fake.list"]().then((result) => {
    //     console.log(result)
    //     alert(JSON.stringify(result))
    // }).catch((err) => {
    //     console.log(err)
    // });

    // alert("typeof $api",)
    // alert(typeof $api["fake.list"], JSON.stringify($api["fake.list"]))
    // alert(JSON.stringify($api["fake.list"]))
}

// Promise<any> getTokenRes () async {
//     return $api["login.getToken"]()
// }
// onBeforeMount(() => {
//   console.log("onBeforeMount");
// });

// onMounted(() => {
//   console.log("onmounted");
// });


</script>

<style scoped>

table{
    width: 100%;
    text-align: center;
}

thead {
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #333333;
    letter-spacing: 0;
    line-height: 12px;
    font-weight: 500;
}

tr{
    line-height: 40px;
}

tbody tr:nth-child(odd) {
    background-color: white;
}

tbody tr:nth-child(even)  {
    background-color: #eeeeee;
}

/* tbody:nth-child(odd) {
    background-color: #eeeeee;
} */

/* tbody:nth-child(even)  {
    background-color: #eeeeee;
} */
/* tbody tr:nth-child(odd) {
    background-color: red;
}

tbody tr:nth-child(even)  {
    background-color: green;
} */

.container{
    background: #F6F6F6;
}
.group{
    background: #FFFFFF;
    /* background-color: green; */
    border-radius: 8px;
}

.header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 0 0 12px;
    /* background-color: transparent; */
}

.header-left{
    display: flex;
    /* border: 0.3px solid blue; */
    /* line-height: 20px; */
}
.header-left-line{
    width: 2px;
    height: 15px;
    background: #FFC800;
    margin-right: 8px;
}

.header-left-title{
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    line-height: 17px;
    font-weight: 500;
}

.header-right{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    letter-spacing: 0;
    line-height: 17px;
    font-weight: 400;
}

/* .card{
    margin: 8px;
    background-color: green;
    border-radius: 8px;
} */
</style>