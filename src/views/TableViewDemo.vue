<template>
  <div class="container">
    <ul>
      <li v-for="e in list" :key="e.name">
        <div class="cell">
          <div class="cell-left">
            <!-- <img src="./assets/logo.png" width="40" height="40"> -->
            <img src="https://syntest.haier.net/resource/smallRoutine/sybird_logo.png" class="icon">
          </div>
          <div class="cell-right">
            <div class="name">{{e.name}}</div>
            <div class="name">
              <router-link :to="{ path: e.path, query: e.query}">{{e.path}} {{e.query}}</router-link>
            </div>
            <div class="button-box">
              <div class="buttons">
                <div class="button-outline">按钮1</div>
                <div class="button-outline">按钮2</div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script setup>

const list = [
        {name: '样式1', path: '/grid1', query: {name: 'hf'}},
        {name: '样式2', path: '/grid2', query: {name: 'hf'}},
        {name: '样式3', path: '/grid3', query: {name: 'hf'}},
        {name: '样式4', path: '/grid4', query: {name: 'hf'}},
        {name: '样式5', path: '/grid5', query: {name: 'hf'}},
        {name: '样式6', path: '/grid6', query: {name: 'hf'}}
      ]

</script>

<style scoped>
/* div{
  border: 0.3px solid blue;
} */

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  /* display: inline-block; */
  /* margin: 0 10px; */
  margin: 0;
  padding: 0.9375rem 0;
  text-align: -webkit-match-parent;
  list-style: none;
  border-bottom: 0.0625rem solid;
}

.container{
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 0;
  margin: 0;
}

.cell {
  background-color: #4ba946;
  display: flex;
  width: 100vw - 8px*2;
  margin: 0 0.5rem 0 0.5rem;
  align-items: center;
}

.cell-left{
  background-color: yellow;

}

.cell-right{
  width: 100%;
  margin: 8px;
  background-color: yellow;
}

.icon{
  width: 44px;
  height: 44px;
  overflow: hidden;
  border-radius: 6px;
}

.name{
  text-overflow: ellipsis;
  display: -webkit-box;
}

.button-box{
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
}
.buttons{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.button-outline{
  width: 5rem;
  /* height: 1.75rem; */
  line-height: 1.75rem;
  font-family: PingFangSC-Regular;
  font-size: .75rem;
  font-weight: 400;
  color: #333;
  text-align: center;
  border: 0.0625rem solid #ddd;
  border-radius: 0.875rem;
  margin-right: 0.625rem;
}

</style>
