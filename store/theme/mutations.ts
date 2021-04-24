import { MutationTree } from 'vuex'
import { ILocalState } from '.'

const mutations: MutationTree<ILocalState> = {
  setCurrent(state, payload: string) {
    state.current = payload
  },

  setAnimations(state, payload: boolean) {
    state.animations = payload
  },

  setDebug(state, payload: boolean) {
    state.debug = payload
  },
}

export default mutations
