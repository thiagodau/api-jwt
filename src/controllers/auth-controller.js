const users = require('../models/users');

module.exports = {
  //POST /auth/register
  register: (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof password !== 'string'
    ) {
      res.status(400).json({ error: 'Invalid fields' });
    }

    const registerUser = users.registerUser(name, email, password);
    if (!registerUser) {
      return res.status(400).json({ error: 'E-mail already registered' });
    }

    res.status(201).json(registerUser)
  },

  //POST /auth/login
  login: (req, res) => {

  }
}