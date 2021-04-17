import { MutationTree } from 'vuex'
import { ISvgState, ISvgNode } from './'

const mutations: MutationTree<ISvgState> = {
  setCache(
    state,
    { filename, payload }: { filename: string; payload: ISvgNode }
  ) {
    state.cache[filename] = payload
  },
}

export default mutations
