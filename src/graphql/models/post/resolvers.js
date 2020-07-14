import Post from '../../../models/Post'

export default {
  Query:{
    posts: () => Post.find(),
    post: (_, {id}) => Post.findById(id)
  }
}