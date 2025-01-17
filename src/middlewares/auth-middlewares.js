const users = require('../models/users');

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config/environment');

module.exports = {
  optionalAuth: (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      next()
    } else {
      const token = authHeader.split(' ')[1]

      try {
        const { id } = jwt.verify(token, JWT_SECRET)
        const user = users.getUserById(id)
        if (!user) return res.status(404).json({ message: 'User not found' })
        req.authenticatedUser = user
        next()
      }
      catch (error) {
        console.error(error)
        res.status(401).json({ error: 'Invalid token' })
      }
    }
  }
}