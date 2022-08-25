<template>
  <h1>{{ $route.meta.title }}</h1>
  <label> Text content for QRCode </label>
  <!-- <input type="text" v-model="text"> -->

  <div>{{ text }}</div>
  <img 
    v-if="text" 
    class="mt-6 mb-2 rounded border" 
    :src="qrcode" 
    alt="QR Code" 
  />

</template>

<script setup>
import { ref } from "vue";
import { useQRCode } from '@vueuse/integrations/useQRCode'

const text = ref("https://vueuse.org");
const qrcode = useQRCode(text, {
  errorCorrectionLevel: "H",
  margin: 3,
});

console.log({qrcode});
</script>

<style scoped>
.mt-6{
  width: 100px;
  height: 100px;
}

.border{
  border: 1px solid blue;
}
</style>