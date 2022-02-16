<template>
    <div class="childComponment">
        <h2>这是子组件childComponment!</h2>
        <slot>
            <van-popup v-model:show="show" position="bottom">
            <div class="sheet">
                <ol>
                    <li class="sheet-cell" v-for="e in list" :key="e">{{e}}</li>
                    <li class="sheet-cell-cancell">取消</li>
                </ol>
            </div>
            </van-popup>
        </slot>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
   setup (){

    onMounted(() => {
        alert(this.show, this.list)
    })

    return {
      show: ref,
      list: [],
    };  
  }

};
</script>



<style scoped>

/* div{
  font-size: 12px;
  text-align: left;
} */

ul, ol{
    list-style-type: none;
    padding:0px;
    margin:0px;
    line-height: 35px;
}

li {
  /* list-style: none; */
  /* border-bottom: 1px solid #eeeeee; */
}

.container{
  font-size: 14px;
  margin: 0;
  padding: 0;
  /* background-color: yellow; */
}

.sheet{
  /* margin: 10px; */
  padding: 10px;
    /* background:none; */
  /* background-color: lightgrey; */
}

.sheet-cell{
  background-color: lightgrey;
  margin: 0px 0 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
}

.sheet-cell-cancell{
  background-color: lightgrey;
  margin: 0px 0 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  text-align: center;
}


van-popup {
  /* background: none; */
  max-height: 50%;
  overflow-y: auto;
  background-color: yellow;
}
</style>
