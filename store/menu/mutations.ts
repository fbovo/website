import { MutationTree } from 'vuex'
import { IMenuState } from './'

const mutations: MutationTree<IMenuState> = {
  setActive(state, { menu, payload }: { menu: string; payload: string }) {
    const { [menu]: item } = state

    item.active = payload
  },
}

export default mutations
