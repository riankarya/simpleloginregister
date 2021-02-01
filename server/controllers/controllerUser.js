const { User } = require('../models')
const hashPassword = require('../helpers/hashPassword')
const { generateToken } = require('../helpers/jwt')

class Controller {
  static registerUser(req, res, next) {
    const { fullname, username, password } = req.body
    const obj = { fullname, username, password }
    User.create(obj)
      .then(data => {
        data = {
          id: data.id,
          username: data.username
        }
        res.status(201).json({ msg: 'Register Berhasil!', data })
      })
      .catch(next)
  }
  static loginUser(req, res, next) {
    console.log(req.body)
    const { username, password } = req.body
    let errors = []
    if (!username.length) errors.push('Username tidak boleh kosong!')
    if (!password.length) errors.push('Password tidak boleh kosong!')
    if (errors.length) next({ name: 'UnprocessibleEntity', errors })
    const obj = { username, password }
    User.findOne({ where: { username } })
      .then(data => {
        if (!data || hashPassword(password) != data.password) throw { name: 'UnAuthorized', msg: 'invalid username or password' }
        let payload = {
          id: data.id,
          username: data.username,
          role: data.role
        }
        const id = +data.id
        let token = generateToken(payload)
        res.status(200).json({ msg: 'Login Berhasil!', token, id, payload })
      })
      .catch(next)
  }
}

module.exports = Controller