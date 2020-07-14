import User from '../../../models/User'

export default {
  Query:{
    users: () => User.find(),
    user: (_, {email}) => User.findOne().where({email})
  },

  Mutation: {
    createUser: (_, {data}) => User.create(data),
    updateUser: (_, {id, data}) => User.findByIdAndUpdate(id, data, {new: true})
  }
}
