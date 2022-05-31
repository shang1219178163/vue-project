<template>
  <div class='container'>
    <VCard
      :margin="'12px'" 
      :padding="'19px 8px 19px'" 
      :borderRadius="'8px'"
      :headerTitle="'headerTitle'"
      :footerTitle="'footerTitle'"
    >
      <template #header>
          <h2>VCard slot header: template #header</h2>
      </template>
      <template #default>
          <p>VCard slot: template #default</p>
      </template>
      <template #footer>
          <p>VCard slot footer: template #footer</p>
      </template>
  </VCard>
  </div>

</template>

<script setup>
import { ref, reactive } from 'vue';
// import VCard from '@/components/VCard.vue';

const tap = (val) => {
  // alert(val.name)
  console.log(val.text)
}

</script>
