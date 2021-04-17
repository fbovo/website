import { NuxtGraphQLInstance } from 'nuxt-graphql-request/types'

// eslint-disable-next-line import/no-mutable-exports
let $graphql: NuxtGraphQLInstance

export function initializeGraphQL(graphqlInstance: NuxtGraphQLInstance) {
  $graphql = graphqlInstance
}

export { $graphql }
