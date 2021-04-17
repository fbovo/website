// import { GetterTree, ActionTree, MutationTree } from 'vuex'
import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

Vue.use(Vuex)

// export interface RootState {
//   version: string
// }

// const options: StoreOptions<RootState> = {
//   state: {
//     version: '1.0.0', // a simple property
//   },
//   // modules: {
//   //   profile,
//   // },
// }

// export const store = new Vuex.Store<RootState>(options)

export interface IRootState extends StoreOptions<any> {
  version: string
}

export const store = new Vuex.Store<IRootState>(<IRootState>{
  version: '1.0.0',
})
// export const getters: GetterTree<RootState, RootState> = {}
// export const mutations: MutationTree<RootState> = {}
// export const actions: ActionTree<RootState, RootState> = {}
