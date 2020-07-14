import Post from '../../../models/Post'

export default {
  Query:{
    posts: () => Post.find(),
    postByTag: (_, {tag}) => Post.find().where({tag}),
    post: (_, {id}) => Post.findById(id)
  },

  Mutation: {
    createPost: (_, {data}) => Post.create(data),
    updatePost: (_, {id, data}) => Post.findByIdAndUpdate(id, data, {new: true})
  }
}