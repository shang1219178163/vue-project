<template>
  <div class='container'>
    <ol id='ol'>
      <li>
        <div class='cell'>
            <div>新插槽 v-slot 代替具名插槽 作用于插槽
                <todo-list>
                    <!-- <template #todo="e = {id:1, text:'扫地'}"> -->
                    <template #todo="{obj:e}">
                        <div @click = tap(e)>
                            {{e.text}}
                        </div>
                    </template>
                </todo-list>
            </div >
        </div>
      </li>
      <!-- <li>
        <div class='cell'>
            <div>submit-button插槽</div>
            <submit-button>Save</submit-button>
        </div>
      </li> -->
    </ol>
  </div>

</template>

<script setup>

// export default {
//     setup() {
//         const list = [{name: '样式1', tag: 'grid1'}
//                     ]
//         tap = (e) => {
//             alert(e)
//         }
//         return {
//             list,
//             tap
//         }
//     }
// }


const tap = (val) => {
      // alert(val.name)
      console.log(val.text)
    }

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
  /* display: flex; */
  width: 100vw - 8px*2;
  margin: 0 0.5rem 0 0.5rem;
  align-items: center;
}

</style>
