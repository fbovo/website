import { MutationTree } from 'vuex'
import { IProjectFeaturedState, IProjectFeatured } from './'

const mutations: MutationTree<IProjectFeaturedState> = {
  setItems: (state, payload: IProjectFeatured[]) => {
    state.items = payload
    state.loaded = true
    state.error = false
  },

  setError: (state) => {
    state.error = true
    state.loaded = false
  },
}

export default mutations
