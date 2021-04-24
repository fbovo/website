import { MutationTree } from 'vuex'
import { II18nState } from '.'

const mutations: MutationTree<II18nState> = {
  setCurrent(state, payload: string) {
    state.current = payload
  },
}

export default mutations
