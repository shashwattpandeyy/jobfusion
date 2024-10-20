const register = async (req, res, next) => {
  console.log('register', req.body)
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
