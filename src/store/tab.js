export default {
  state: {
    menu: [],
    currentMenu: null,
    tabsList: [
      {
        name: 'home',
        path: '/',
        label: '首页',
        icon: 'location'
      }
    ]
  },
  mutations: {
    selectMenu(state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val
        let result = state.tabsList.findIndex(item => item.name === val.name)
        if (result === -1) {
          state.tabsList.push(val)
        }
      } else {
        state.currentMenu = null
      }
    },
    closeTab(state, val) {
      let result = state.tabsList.findIndex(item => item.name === val.name)
      state.tabsList.splice(result, 1)
    }
  },
  actions: {}
}
