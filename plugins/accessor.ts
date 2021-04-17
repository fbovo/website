import { Plugin } from '@nuxt/types'
import { initializeGraphQL } from '~/utils/accessor'

const accessor: Plugin = ({ $graphql }) => {
  initializeGraphQL($graphql)
  // initializeAxios($axios)
}

export default accessor
