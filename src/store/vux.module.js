export default {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    showHeader: true,
    rightMenu: {
      name:'',
      url:'',
      show:false
    },
    direction: 'forward'
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    },
    updateShowHeader (state, payload) {
      state.showHeader = payload.showHeader
    },
    updateRightMenu (state, payload) {
      state.rightMenu = payload.rightMenu
    }
  }
}
