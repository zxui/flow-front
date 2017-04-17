<template>
  <div style="width: 95%;margin: 5% auto;">
    <div>
      <step v-model="step" background-color='#fbf9fe' gutter="20px">
        <step-item :title="page1"></step-item>
        <step-item :title="page2"></step-item>
        <step-item :title="page3"></step-item>
      </step>
      <div class="btn_wrap" v-if="step < 2">
        <x-button type="primary" @click.native="nextStep">{{nextBtn}}</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Step, StepItem, XButton, XHr } from 'vux'
  export default {
    components: {
      Step,
      StepItem,
      XButton,
      XHr
    },
    data () {
      return {
        page1:'基本信息',
        page2:'上传证件',
        page3:'完成',
        nextBtn:'下一步',
        step: 0
      }
    },
    methods: {
      nextStep () {
        if(2==this.step){
          return false;
        }
        this.step ++
      }
    }
  }
</script>

<style lang="less">
  .btn_wrap {
    padding: 0 1rem;
    margin-top: 2rem;
  }
</style>
