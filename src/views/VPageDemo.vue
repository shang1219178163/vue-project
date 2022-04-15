  <template>
    <VPage
    headerHeight="46px"
    footerHeight="84px"
    navTitle="申请售后"
    btnTitle="立即预约"
    :btnDisabled="!isValidParams"
    @submit="onSubmit"
    >
        <!-- <template #header>
            <van-nav-bar 
            class="navbar" 
            v-if="!isWxmp && isShowNavBar"
            title="售后服务" 
            left-arrow 
            @click-left="onClickLeft" 
            isFixed />
        </template> -->

        <div
        v-for="(item, index) in 100" :key="index"
        @click="click"
        >
        content {{item}}
        </div>

        <!-- <template #footer>
            <div class="footer">
                <div class="button" @click="onSubmit" >立即预约</div>
            </div>
        </template> -->
    </VPage>
    <van-action-sheet
    v-model:show="show"
    :actions="actions"
    @select="onSelect"
    cancel-text="取消"
    description="这是一段描述信息"
    close-on-click-action
    @cancel="onCancel"
    >
    </van-action-sheet>
  </template>



<script setup>
import VPage from "@/components/VPage.vue";

import { ref, reactive, toRaw, defineProps, onMounted, computed } from 'vue';
import { Toast } from 'vant';
import * as LOG from "@/utils/log.js";


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

const onSubmit = () => {
    LOG.log(`onCancell`);

}

const click = () => {
    LOG.log(`onCancell`);
   show.value = !show.value
}

const isValidParams = computed(() => {
    return false;
})


const show = ref(false);
const actions = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' },
];
const onCancel = () => Toast('取消');

const onSelect = (item) => {
  Toast(item.name);
};
</script>


<style scoped lang="scss">

.content{
    overflow-y: scroll;

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