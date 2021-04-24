import { MutationTree } from 'vuex'
import { IMenuState } from './'

const mutations: MutationTree<IMenuState> = {
  setActive(
    state,
    {
      menu,
      payload,
      modal = false,
      overlay = false,
    }: {
      menu: string
      payload: string | boolean
      modal?: boolean
      overlay?: boolean
    }
  ) {
    const { [menu]: item } = state

    item.active = payload
    item.modal = modal
    item.overlay = overlay
  },
}

export default mutations
