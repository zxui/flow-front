<template>
  <div>
    <div class="l-flow">
      <div class="l-flow-title">移动产品55M</div>
      <div class="l-flow-desc">移动饭粒二 18602740057</div>
    </div>
    <div class="l-flow">
        <hr>
    </div>
    <div class="l-flow">
      <PieChart :data="pieData"></PieChart>
      <x-button type="warn" mini @click.native="goPackage">补充流量</x-button>
    </div>
    <div>
      <LineChart :data="lineData"></LineChart>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import { XButton } from 'vux'
  import PieChart from './PieChart'
  import LineChart from './LineChart'
  import store from '../store'

  export default {
    components: {
      XButton,
      PieChart,
      LineChart
    },
    mounted(){
      store.commit('updateRightMenu', {rightMenu:{name: '支付记录',url:'/#PayOder',show:true}});
    },
    methods:{
      goPackage: function () {
        window.location.href = '#/Package'
      }
    },
    data () {
      return {
        pieData: {
          "operator": "1",
          "base": 55.0,
          "total": 55.0,
          "used": 76.09,
          "remain": 12.37,
          "cycle": "月",
          "updateTime": 1486951058000,
          "expiredTime": 1500514246000,
          "flowDesc": "本月总计：55.0M，其中续费流量：0.0M",
          "simDesc": "注：此卡为55.0M/月套餐免费卡，2017年7月20日前有效。",
          "packageTitle": "移动产品55M"
        },
        lineData: [{
          "timeStamp": 1486742400000,
          "useFlow": -6.05,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }, {
          "timeStamp": 1486656000000,
          "useFlow": 4.25,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }, {
          "timeStamp": 1486569600000,
          "useFlow": -77.57,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }, {
          "timeStamp": 1486483200000,
          "useFlow": 47.73,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }, {
          "timeStamp": 1486396800000,
          "useFlow": 15.57,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }, {
          "timeStamp": 1486310400000,
          "useFlow": -69.12,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }, {
          "timeStamp": 1486224000000,
          "useFlow": 29.99,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }, {
          "timeStamp": 1486137600000,
          "useFlow": -11.48,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }, {
          "timeStamp": 1486051200000,
          "useFlow": -18.51,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }, {
          "timeStamp": 1485964800000,
          "useFlow": 39.36,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }, {
          "timeStamp": 1485878400000,
          "useFlow": 15.64,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }, {
          "timeStamp": 1485792000000,
          "useFlow": 4.62,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }, {
          "timeStamp": 1485705600000,
          "useFlow": -29.79,
          "totalFlow": 55.0,
          "baseFlow": 55.0
        }]
      }
    }
  };
</script>
<style scoped>
  .l-flow {
    text-align: center;
    line-height:2.1
  }
  .l-flow button{
    cursor: pointer;
    padding: 0.5%;
    width: 50%;
  }
  .l-flow hr{
    border: none;
    border-top: 1px dashed #bec1c5;
  }
  .l-flow .l-flow-title{
    font-family: Microsoft Yahei;
    font-size: 140%;
    font-weight: 500;
  }
  .l-flow .l-flow-desc{
    font-family: Microsoft Yahei;
    color: #636363;
    font-size: 1rem;
    margin-bottom: 3%;
  }
</style>
