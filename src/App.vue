<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <x-header :left-options="headerOpts" v-show="showHeader">个人中心<a slot="right" v-show="rightMenu.show"  :href="rightMenu.url">{{rightMenu.name}}</a></x-header>
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import { XHeader, Actionsheet ,Loading } from 'vux'
  import { mapState} from 'vuex'
  export default {
    name: 'app',
    data (){
      return {
        headerOpts: {
          showBack:true,
          backText: '返回'
        }
      }
    },
    components: {
      XHeader,
      Actionsheet,
      Loading
    },
    computed: {
      ...mapState({
        route: state => state.route,
        path: state => state.route.path,
        rightMenu: state => state.vux.rightMenu,
        isLoading: state => state.vux.isLoading,
        showHeader: state => state.vux.showHeader,
        direction: state => state.vux.direction
      })}
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
  .vux-header{
    background-color: #f64a4a !important;
  }
  /**
* vue-router transition
*/
  .router-view {
    width: 100%;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    backface-visibility: hidden;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    height: 100%;
    position: absolute;
    left: 0;
  }
  .vux-pop-out-enter-active {
    animation-name: popInLeft;
  }
  .vux-pop-out-leave-active {
    animation-name: popOutRight;
  }
  .vux-pop-in-enter-active {
    perspective: 1000;
    animation-name: popInRight;
  }
  .vux-pop-in-leave-active {
    animation-name: popOutLeft;
  }
  @keyframes popInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes popOutLeft {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes popInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes popOutRight {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
