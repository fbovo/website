import { ApolloServer, gql } from 'apollo-server-lambda'

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    // hello: (root, args, context)
    hello: () => {
      return `Hello from Netlify function.`
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

export const handler = server.createHandler()
