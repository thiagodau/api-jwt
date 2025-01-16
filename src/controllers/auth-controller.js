const users = require('../models/users');
const jwt = require('jsonwebtoken');

const secretKey = "secret-key-here"

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
    const { email, password } = req.body

    if (
      typeof email !== 'string' ||
      typeof password !== 'string'
    ) {
      res.status(400).json({ message: 'Invalid fields' });
    }

    const user = users.getByEmail(email)
    if (!user) return res.status(404).json({ message: 'User not found.' })
    if (user.password !== password) return res.status(400).json({ message: 'Invalid credentials.' })

    // Create and return a JSON Web Token (JWT)
    const payload = { id: user.id, email: email}
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" })
    res.json({ token } )

  }
}