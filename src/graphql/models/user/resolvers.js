import User from '../../../models/User'

export default {
  Query:{
    users: () => User.find(),
    user: (_, {id}) => User.findById(id)
  }
}