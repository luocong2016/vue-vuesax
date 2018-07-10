import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  userName: null,
  age: null,
  login: true // 是否登录
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
