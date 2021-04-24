import { MutationTree } from 'vuex'
import { ILocalState } from '.'

const mutations: MutationTree<ILocalState> = {
  setCurrent(state, payload: string) {
    state.current = payload
  },
}

export default mutations
