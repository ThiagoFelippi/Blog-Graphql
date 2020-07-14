import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

const startServer = ( typeDefs, resolvers ) => {
  mongoose.connect("mongodb://localhost:27017/blog_graphql", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log("Mongo connected")
  })
  
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  server.listen()
    .then(({url}) => {
      console.log(`App is running at ${url}`)
    })
}

export default startServer