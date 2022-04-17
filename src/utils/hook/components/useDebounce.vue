<template>
  <div>
    <input type="text" v-model="keyword">
  </div>
</template>

<script>
import {useAssociateSearch} from "@/utils/hook/useDebounce/search";

export default {
  name: "useDebounce",
  setup() {
    const {keyword} = useAssociateSearch()
    return {
      keyword
    }

  }
}
</script>

<style scoped>

</style>
