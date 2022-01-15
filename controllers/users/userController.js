const { registrationUser, loginUser, logoutUser,updateBalance } = require('../../services/users/index')

class UserController {
  constructor() {
    this.register = this.register.bind(this)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
    this.updateBalance =this.updateBalance.bind(this)
   
  }

  async register(req, res, next) {
    const { email, password } = req.body
    const user = await registrationUser({ email, password })
    res.status(201).json({ user: user })
  }

  async logIn(req, res, next) {
    const { email, password } = req.body
    const user = await loginUser({ email, password })
    res.status(200).json(user)
  }

  async logOut(req, res, next) {
    const { _id, token } = req.user
    await logoutUser({ _id, token })
    res.status(204)
    res.end()
  }

  async updateBalance(req, res, next) {
   
    res.status(200).json()
  }

}

module.exports = new UserController()