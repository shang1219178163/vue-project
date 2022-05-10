<template>
    <!-- <div :class="['cell-content', getStepType(stepType)]"> -->
        <div :class="['cell-content', 'stepType' + stepType]">
        <div class="cell-body">
            <div class="cell-body-left" v-if="leftTitle || leftSubtitle">
                <div class="left-title">{{ leftTitle }}</div>
                <div class="left-subtitle">{{ leftSubtitle }}</div>
            </div>
            <div class="step">
                <div class="line-top" v-if="stepType!==0"></div>
                <img v-if="stepIcon" class="step-icon" :src="stepIcon" />
                <div v-else class="step-point"></div>
                <div class="line-bottom" v-if="stepType!==1"></div>
                </div>
            <div class="cell-body-mid">
                <div :class="['cell-body-row0', { only: !desc }]">
                    <div class="title"> {{ title }} </div>
                    <div class="tag" v-if="tag"> {{ tag }} </div>
                </div>
                <div v-if="desc" class="cell-body-row1">
                {{ desc }}
                </div>
            </div>
            <!-- <div class="cell-body-right">
                收起
            </div> -->
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'

defineProps({
    /// 0 开始 1 结束 2 其他
    stepType: {
      type: Number,
      default: 0
    },
    stepIcon: {
      type: String,
      default: ""
    },
    padding: {
      type: String,
      default: "20px"
    },
    lineBottomHeight: {
      type: String,
      default: "20px"
    },

    leftTitle: {
      type: String,
      default: ""
    },
    leftSubtitle: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "需求已提报"
    },
    phone: {
      type: String,
      default: "-"
    },
    tag: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: "备注：已与用户确认需求备注：已与用户确认需求备注：已与用户确认需求备注：已与用户确认需求备注：已与用户确认需求"
    },
    score: {
      type: String,
      default: "-"
    },
    times: {
      type: String,
      default: "-"
    },
})

const getStepType = (val) => {
    return `stepType${val}`
}

// const emit = defineEmits(['clickPhone', ])

// function clickPhone(val) {
//   emit("clickPhone", val);
// }


</script>


<style scoped lang="scss">
 
$spacing: 8px;
$StepIcon: 32px;

@mixin line-limit-length {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin flex-column-center{
    display: flex;
    flex-direction: column;
    align-items: center;
}

@mixin font-gray-style{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0.11px;
    line-height: 18px;
    font-weight: 400;
}

div {
  text-align: left;
//   border: 0.3px solid blue; 
}

.cell-content{
    // padding: 20px;
    padding: v-bind(padding);
    background-color: white;
    // background-color: green;
    &.stepType0{
         padding-bottom: 0;
     }
    &.stepType1{
         padding-top: 0;
     }
    &.stepType2{
         padding-top: 0;
         padding-bottom: 0;
     }
}
.cell-body{
    padding: 0px 0px 0px 0px;

    display: flex;
}

.cell-body-left{
    white-space: nowrap;
}

.step{
    padding: 0px 8px 0px 8px;

    @include flex-column-center;
}
.cell-body-mid{
  flex-grow: 1;

  display: flex;
  flex-direction: column;
//   justify-content: space-evenly;
}
.cell-body-right{
//   width: 40px;
  display: flex;
  align-self: center;
}

.cell-body-row0{
  display: flex;

  flex-grow: 1;
    
    &.only{
        // align-items: center;
    }
}
.cell-body-row1{
    @include font-gray-style;

    font-size: 12px;

    margin-top: 8px;
}
.step-icon{
    width: $StepIcon;
    height: $StepIcon;
    // border: 1px solid rgba(255,200,0,1);
    border-radius: 21px;
    
    margin-top: 4px;
    margin-bottom: 4px;
}

.step-point{
    width: 6px;
    height: 6px;
    background: #999999;

    border-radius: 6px;
}

.line-top{
    width: 1px;
    // height: 28px;
    background: #CCCCCC;

    flex-grow: 1;
}
.line-bottom{
    width: 1px;
    // height: 28px;
    background: #CCCCCC;
    // background-color: red;

    flex-grow: 1;

    height: v-bind(lineBottomHeight);
}
.score{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    letter-spacing: 0.08px;
    line-height: 12px;
    font-weight: 400;
}

.title{
  font-family: PingFangSC-Medium;
  font-size: 15px;
  color: #333333;
  letter-spacing: 0;
  line-height: 22px;

  flex-shrink: 1;

  @include line-limit-length;
}

.tag{
  background: #F5F5F5;
  border-radius: 4px;

  height: 14px;

  font-family: PingFangSC-Regular;
  font-size: 12px;
  font-weight: 400;

  letter-spacing: 0.05px;
  line-height: 10px;

  display: flex;
  align-self: center;

  flex-shrink: 0;

  // -webkit-transform: scale(0.7);
  font-size: 8px;

  padding: 5px 3px 2px;
  margin-left: 8px;

  @include line-limit-length;
}

.date-day{
    @include font-gray-style;

    text-align: right;
}

.date-minute{
    @include font-gray-style;

    font-size: 10px;
    text-align: right;
}

</style>