import { ApolloServer } from 'apollo-server'

const startServer = ( typeDefs, resolvers ) => {
  
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  server.listen()
    .then(({url}) => {
      console.log(`App is running at ${url}`)
    })
}