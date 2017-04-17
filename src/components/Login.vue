<template>
  <div>
    <div class="t-logo">
      <img src="../assets/iflyauto.png" width="100%">
    </div>
    <group>
      <x-input title="手机号码" name="mobile" v-model="tel" placeholder="请输入手机号码"
               keyboard="number" is-type="china-mobile"></x-input>
      <x-input title="发送验证码" class="weui-vcode" v-model="ver">
        <x-button slot="right" type="primary" mini @click.native="startCountDown">{{countdownName}}
          <countdown v-model="time" :start="start" v-show=""></countdown>
        </x-button>
      </x-input>
    </group>
    <br>
    <br>
    <br>
    <x-button type="primary" @click.native="login">登录</x-button>
    <toast v-model="msgState" type="text" width="20em">{{msg}}</toast>
  </div>
</template>

<script>
  import { Countdown ,Toast,XInput, Group,Box, XButton, Cell } from 'vux'
  import store from '../store'
  export default {
    components: {
      Countdown,
      Toast,
      XInput,
      XButton,
      Box,
      Group,
      Cell
    },
    data () {
      return {
        tel: '18602740057',
        ver: 'auto',
        time: 60,
        start: false,
        msgState:false,
        countdownName:'发送验证码',
        value: false,
        msg:'验证码错误'
      }
    },
    mounted(){
      store.commit('updateShowHeader', {showHeader: false})
    },
    methods: {
      login () {
        if(this.tel=='18602740057'&&this.ver=='auto'){
          window.location.href = '#/CardList'
        }else {
          this.msgState = true;
        }
      },
      startCountDown(){
        this.start = true;
        this.countdownName = '重新发送';
      }
    }
  }
</script>
<style scoped>
  .red {
    color: red;
  }

  .green {
    color: green;
  }

  .t-logo {
    padding: 5%;
    text-align: center;
  }
</style>
