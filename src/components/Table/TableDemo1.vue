<template>
  <div>
    <div class="title">
        <div class="title_left">
            <img alt="" src="@/assets/logo.png" style="height: 15px;" />
            <span>报价清单</span>
        </div>
        <div>
            总价: 25600.00
        </div>
    </div>
    <table class="separate" rules=none> 
      <!-- <caption>A summary of the UK's most famous punk bands</caption> -->
      <thead>
          <tr>
              <th scope="col">Band</th>
              <th scope="col">Year formed</th>
              <th scope="col">No. of Albums</th>
              <th scope="col">Most famous song</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <th scope="row">Buzzcocks</th>
              <td>1976</td>
              <td>9</td>
              <td>Ever fallen in love (with someone you shouldn't've)</td>
          </tr>
          <tr>
              <th scope="row">The Clash</th>
              <td>1976</td>
              <td>6</td>
              <td>London Calling</td>
          </tr>
          <tr>
              <th scope="row">The Stranglers</th>
              <td>1974</td>
              <td>17</td>
              <td>No More Heroes</td>
          </tr>
          <tr>
              <th scope="row">The Newer</th>
              <td>1975</td>
              <td>16</td>
              <td>No More Heroes</td>
          </tr>
      </tbody>
      <tfoot>
          <tr>
            <th scope="row" colspan="2">Total albums</th>
            <td colspan="2">77</td>
          </tr>
      </tfoot>
    </table>
  </div>

</template>

<script>

export default {
  components: {},
  name: 'GridDemo',
  created () { },
  data () {
    return {
      list: [
        {name: '样式1', path: '/grid1', query: {name: 'hf'}},
        {name: '样式2', path: '/grid2', query: {name: 'hf'}},
        {name: '样式3', path: '/grid3', query: {name: 'hf'}},
        {name: '样式4', path: '/grid4', query: {name: 'hf'}},
        {name: '样式5', path: '/grid5', query: {name: 'hf'}},
        {name: '样式6', path: '/grid6', query: {name: 'hf'}}
      ]
    }
  },
  props: {},
  methods: {}
}
</script>

<style scoped>

/* div{
  border: 0.3px solid blue;
} */

/* .collapse {
    border-collapse: collapse;
}
.separate {
    border-collapse: separate;
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

table{
    text-align: center;
    margin: 0;
    padding: 0;
}

tbody tr:nth-child(odd) {
  background-color: white;
}

tbody tr:nth-child(even)  {
  background-color: #eeeeee;
}

thead {
    background-color: #eeeeee;
}
/* 
tbody tr {
}

table {
  background-color: #ff33cc;
}

thead, tfoot {
    background-color: lightgray;
    border-color: transparent;
  color: white;
  text-shadow: 1px 1px 1px black;
}

thead th, tfoot th, tfoot td {
  border: 3px solid purple;
} */

</style>
