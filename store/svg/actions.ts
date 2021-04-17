import { ActionTree } from 'vuex'
import { ISvgState, ISvgNode } from './'
import { IRootState } from '~/store'

const actions: ActionTree<ISvgState, IRootState> = {
  async load({ commit, state }, filename: string): Promise<ISvgNode> {
    let { [filename]: payload } = state.cache

    if (payload === undefined) {
      payload = await import(`~/data/svg/${filename}.json`).then(
        (module) => module.default
      )
      commit('setCache', { filename, payload })
    }

    return payload
  },
}

export default actions
