import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'
import path from 'path'

const resolversArray = fileLoader(path.join(__dirname, "models", "**", "resolvers.js"))
const resolvers = mergeResolvers(resolversArray)

console.log(resolvers)

export default resolvers