import { ActionTree } from 'vuex'
import { gql } from 'graphql-request'
import { IProjectFeaturedState, IProjectFeatured } from './'
import { IRootState } from '~/store'
import { $graphql } from '~/utils/accessor'

const actions: ActionTree<IProjectFeaturedState, IRootState> = {
  async load({ commit, state: { loaded } }, story: string): Promise<void> {
    if (loaded !== false) {
      // eslint-disable-next-line no-console
      console.warn('Same collection loaded more then once.')
    }

    const variables = { story }
    const query = gql`
      query getProjects($story: String!) {
        Projects(where: { _stories_any: [$story] }) {
          items {
            name
            description
            image {
              name
              cdn_files {
                cover: url(width: 800, format: "webp")
              }
            }
          }
        }
      }
    `

    try {
      const response: {
        Projects: { items: IProjectFeatured[] }
      } = await $graphql.request(query, variables)

      commit('setItems', response.Projects.items)
    } catch (e) {
      commit('setError')
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
}

export default actions
