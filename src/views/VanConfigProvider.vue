<template lang="">
    <div>
        <van-config-provider :theme-vars="themeVars">
        <van-form>
            <van-field name="rate" label="评分">
            <template #input>
                <van-rate v-model="rate" />
            </template>
            </van-field>
            <van-field name="slider" label="滑块">
            <template #input>
                <van-slider v-model="slider" />
            </template>
            </van-field>
            <div style="margin: 16px">
                <van-button round block type="primary" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
        <van-popup v-model:show="show" position="bottom"	>
            <div class="sheet">
                <ol>
                <li class="sheet-cell" v-for="e in phones" :key="e">{{e}}</li>
                <li class="sheet-cell-cancell">取消</li>
                </ol>
            </div>
        </van-popup>
        </van-config-provider>
        <div class="right" @click='showPopup'>呼叫</div>

    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const rate = ref(4);
    const slider = ref(50);
    const show = ref(false);

    const themeVars = {
      rateIconFullColor: '#07c160',
      sliderBarHeight: '4px',
      sliderButtonWidth: '20px',
      sliderButtonHeight: '20px',
      sliderActiveBackgroundColor: '#07c160',
      buttonPrimaryBorderColor: '#07c160',
      buttonPrimaryBackgroundColor: '#07c160',
      popupBackgroundColor: "#ff0000"
    };


    const showPopup = () => {
        show.value = true;
        console.log(show.value)
    }

    const phones = [16666666666, 18888888888, 19999999999]

    return {
      rate,
      slider,
      themeVars,
      phones,
      show,
      showPopup
    };
  },
};

</script>
<style scoped>
.sheet{
  /* margin: 10px; */
  padding: 10px;
    background: none;
  /* background-color: transparent; */
}

.sheet-cell{
  background-color: lightgrey;
  background: none;
  /* background-color: transparent; */

  margin: 0px 0 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
}

.sheet-cell-cancell{
  background-color: lightgrey;
    background: none;

  margin: 0px 0 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  text-align: center;
}

</style>