import { GetterTree } from 'vuex'
import { ILocalState } from '.'
import { IRootState } from '~/store'

const getters: GetterTree<ILocalState, IRootState> = {
  hasModal: (state): boolean => {
    for (const menu in state) {
      if (state[menu].active) return true
    }

    return false
  },

  hasOverlay: (state): boolean => {
    for (const menu in state) {
      if (state[menu].active && state[menu].overlay) return true
    }

    return false
  },
}

export default getters
