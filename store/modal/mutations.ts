import { MutationTree } from 'vuex'
import { ILocalState } from '.'

const mutations: MutationTree<ILocalState> = {
  setActive(state, payload: { [key: string]: boolean }): void {
    for (const menu in payload) {
      if (state[menu]) {
        const { overlay } = state[menu]

        // See https://vuex.vuejs.org/guide/mutations.html#mutations-follow-vue-s-reactivity-rules
        state[menu] = {
          active: payload[menu],
          overlay,
        }
      }
    }
  },
}

export default mutations
