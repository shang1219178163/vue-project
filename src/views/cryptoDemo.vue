<template>
  <h1>CryptoDemo</h1>
  <div>原文:{{text}}</div>
  <div>密文:{{encryptText}}</div>
  <div>解密:{{decryptText}}</div>

  <button @click="onAESEncrypt">AES-CBC加密</button>
  <button @click="onAESDecrypt">AES-CBC解密</button>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';
// import tools from '@/utils/tools';
import { useCryptoAES, useCryptoRSA } from '@/utils/use/useCrypto';

const {encryptAES, decryptAES} = useCryptoAES(); 
const {encryptRSA, } = useCryptoRSA(); 

const currentInstance = getCurrentInstance();
const { $uplus, $vtoast } = currentInstance.appContext.config.globalProperties;


const text = ref('hellow world!');
const encryptText = ref('');
const decryptText = ref('');

const onAESEncrypt = () => {
  encryptText.value = encryptAES(text.value);
  console.log('encryptText.value', encryptText.value);
};

const onAESDecrypt = async () => {
  decryptText.value = decryptAES(encryptText.value);
  console.log('decryptText.value', decryptText.value);
};


const x = encryptAES(text.value);
console.log('encrypt:', x);
console.log('decrypt:', decryptAES(x));


const {
  encryptAES: encryptAES1, 
  decryptAES: decryptAES1,
} = useCryptoAES('1111111111111111', '1111111111111111');

const x1 = encryptAES1(text.value);
console.log('encrypt1:', x1);
console.log('decrypt1:', decryptAES1(x1));
</script>


<style scoped lang='scss'>

</style>