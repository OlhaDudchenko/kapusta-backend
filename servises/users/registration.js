
const { User } = require('../../db/userModal')
const { RegistrationConflictError } = require('../../helpers/errors')
require('dotenv').config()

const registrationUser = async ({ email, password }) => {
    // console.log(email,password)
  const findUserByEmail = await User.findOne({ email })
  if (findUserByEmail) {
    throw new RegistrationConflictError('Email in use')
  }

  const user = new User({ email, password })
  await user.save()

  const newUser = {
    email: user.email,
    subscription: user.subscription,
  }

  return newUser
}

module.exports = registrationUser