<template>
    <div>
        <van-nav-bar title="物料清单" left-arrow  @click-left="onClickLeft"/>
        <div class="title">
            <div class="title_left">
                <img alt="" src="@/assets/logo.png" style="height: 15px; width: 15px" />
                <span>报价清单</span>
            </div>
            <div>
                总价: {{this.totalPrice}}
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
</template>

<script>
export default {
  setup() {

    const onClickLeft = () => history.back();

    const list = [
        {name: '像素地板', unit: '', unitPrice: '1800', count: '200', urls: '', desc: '', id:'0'},
        {name: '我的家油漆', unit: '', unitPrice: '2000', count: '30', urls: '', desc: '', id:'1'},
        {name: '木门', unit: '', unitPrice: '2122', count: '2', urls: '', desc: '', id:'2'},
        {name: '客厅地砖', unit: '', unitPrice: '3222', count: '300', urls: '', desc: '', id:'3'},
      ]

    const totalPrice = "256600.00"

    return { 
        onClickLeft,
        list,
        totalPrice,
    };
  }
}
</script>

<style scoped>

table{
    width: 100%;
    text-align: center;
}

thead {
    font-weight: bold;
    background-color: #eeeeee;
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

.title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.title_left{
    display:inline-block;
    border: 0.3px solid blue;
}

</style>