import { gql } from "apollo-server"
import startServer from './server'

const typeDefs = gql`
  type Query{
    hello: String!
  }

`

const resolvers = {
    Query: () => {
      hello: () => "Hello world"
    },

}

startServer(typeDefs, resolvers)