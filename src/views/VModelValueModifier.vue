
<template>
  <vInputcmp v-model.upperCase="inpvalue1" />
  <br />
  <vInputcmpV2 v-model:zs.hasPre="inpvalue2" :msg="msg" />
</template>
 
<script setup>
import { ref } from 'vue'
import vInputcmp from '@/components/VModelValueModifier/inputcmp.vue'
import vInputcmpV2 from '@/components/VModelValueModifier/inputcmpV2.vue'

let inpvalue1 = ref('abc');
let inpvalue2 = ref('zs');
let zs = ref('zs')
</script>

