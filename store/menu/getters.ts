import { GetterTree } from 'vuex'
import { IMenuState } from './'
import { IRootState } from '~/store'

const getters: GetterTree<IMenuState, IRootState> = {
  hasModal: (state): boolean => {
    for (const menu in state) {
      if (state[menu].modal) return true
    }

    return false
  },
  hasOverlay: (state): boolean => {
    for (const menu in state) {
      if (state[menu].overlay) return true
    }

    return false
  },
}

export default getters
