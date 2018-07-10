import { getUser } from '../service/getData.js'
import { GET_USERINFO } from './mutationType'

export default {
  async getUserInfo ({ commit, state }) {
    commit(GET_USERINFO, await getUser())
  }
}
