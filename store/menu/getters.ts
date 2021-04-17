import { GetterTree } from 'vuex'
import { IMenuState } from './'
import { IRootState } from '~/store'

const getters: GetterTree<IMenuState, IRootState> = {
  hasModal: (state): boolean => {
    return state.main.active !== '' || state.about.active !== ''
  },
}

export default getters
