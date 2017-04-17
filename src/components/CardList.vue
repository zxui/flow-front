<template>
  <div>
    <panel header="SIM卡列表" :footer="footer" :list="list" :type="type"></panel>
  </div>
</template>

<script>
  import { Panel, Group, Radio } from 'vux'
  import store from '../store'
  export default {
    components: {
      Panel,
      Group,
      Radio
    },
    mounted(){
      store.commit('updateShowHeader', {showHeader: true});
      store.commit('updateRightMenu', {rightMenu:{name: '更改手机号',url: '/#updateTel',show: true}});
    },
    data () {
      return {
        type: '1',
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '移动10元100MB',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/Center'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '移动20元200MB',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/Center',
            replace: false
          }
        }],
        footer: {
          title: '查看更多',
          url: 'javascript:void(0)'
        }
      }
    }
  }
</script>
