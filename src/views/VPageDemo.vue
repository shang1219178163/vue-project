  <template>
    <VPage
    headerHeight="46px"
    footerHeight="84px"
    >
        <template #header>
            <!-- <van-nav-bar 
            :isleftarrow="true" 
            navBarTitle="fixed" 
            v-if="!isWxmp && isShowNavBar" /> -->
            <van-nav-bar 
            class="navbar" 
            v-if="!isWxmp && isShowNavBar"
            title="售后服务" 
            left-arrow 
            @click-left="onClickLeft" 
            isFixed />

        </template>

        <div v-for="(item, index) in 100" :key="index">
        content {{item}}
        </div>

        <template #footer>
            <div class="footer">
                <div class="button" @click="onSubmit" >立即预约</div>
                <!-- <div class="van-safe-area-bottom"></div> -->
            </div>
        </template>
    </VPage>
  </template>



<script setup>
import { ref, reactive, toRaw, defineProps, onMounted, watch } from 'vue';

import VPage from "@/components/VPage.vue";


defineProps({
  isShowNavBar: {
    type: Boolean,
    default: true,
  },
  height: {
    type: Number,
    default: Number.MAX_VALUE,
  },
});


</script>


<style scoped lang="scss">

.content{

    background-color: green;
}

.footer{
    width: 100vw;
    height: 84px;

    border: 1px solid blue;
    background-color: #ffffff;
}
.button{
    height: 44px;

    border-radius: 22px;
    @include syn-btn-submit; 

    margin: 8px 20px 34px;
}

</style>