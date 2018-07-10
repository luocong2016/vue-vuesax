import { GET_USERINFO } from './mutationType'

export default {
  // 获取用户信息
  [GET_USERINFO] (state, info) {
    console.log(state, info)
    if (state.userName && (state.userName !== info.userName)) {
      return
    }

    if (!state.login) {
      return
    }

    if (!info.message) {
      state.userName = info.userName
      state.age = info.age
    }
  }
}
