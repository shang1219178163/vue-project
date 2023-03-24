<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <details>
    <summary>这是标题</summary>
    这是一段解释文本。
  </details>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

onMounted(() => {
  const details = document.querySelector('details');
  onChangeState(detail.open);

  details.addEventListener('toggle', event => {
    onChangeState(detail.open);
  });
});

watch(() => route.params, (params, previousParams) => {
  if (Object.keys(params).length === 0 ) {
    return;
  }
  handleRouteParams();
});

const handleRouteParams = () => {

};


const onChangeState = (open) => {
  console.log(details.open ? "open" : "close");
};



</script>


<style scoped lang='scss'>

// summary::-webkit-details-marker {
//   background: url(https://example.com/foo.svg);
//   color: transparent;
// }


summary::-webkit-details-marker {
  display: none;
}

summary:before {
  content: "\2714";
  color: #696f7c;
  margin-right: 5px;
}

</style>