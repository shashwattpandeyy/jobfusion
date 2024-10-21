import UserService from '../services/userService.js'

const register = async (req, res, next) => {
  const userService = new UserService()

  await userService.create(req.body)

  next()
}

const get = async (req, res, next) => {
  next()
}

const update = async (req, res, next) => {
  next()
}

//update user password when they are loggedIn
const reset = async (req, res, next) => {
  next()
}

export { register, get, update, reset }
