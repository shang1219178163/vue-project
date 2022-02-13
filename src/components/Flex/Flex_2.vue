<template>
    <div>
        <div class="upper">
            <div>aaa<br/>aaa</div>
            <div>aaa</div>
            <div>aaa<br/>aaa</div>
            <div>aaa<br/>aaa<br/>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
        </div>

        <div class="upper mc">
            <div>aaa<br/>aaa</div>
            <div>aaa</div>
            <div>aaa<br/>aaa</div>
            <div>aaa<br/>aaa<br/>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'flex_2',
  created () {},
  data () {
    return {
    }
  },
  props: {},
  methods: {}
}
</script>

<style scoped>

div{
  border: 0.3px solid blue;
}

.upper
{
    margin:30px;
    display:flex;
    flex-direction:row;
    width:300px;
    height:80px;
    border:1px red solid;
    
    padding:5px; /* this */
}

.upper > div
{
    flex:1 1 auto;
    border:1px red solid;
    text-align:center;
    
    margin:5px;  /* and that, will result in a 10px gap */
}

.upper.mc
{
    flex-direction:column;
    flex-wrap:wrap;
    width:200px;
    height:200px;
}

</style>
