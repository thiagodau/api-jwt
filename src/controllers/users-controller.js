const users = require('../models/users');

module.exports = {
  //GET /users
  index: (req, res) => {
    const allUsers = users.getAllUsers()
    res.status(200).json(allUsers);
  },
  //GET /users/:id
  show: (req, res) => {
    const { id } = req.params
    const user = users.getUserById(id)
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  },
  //POST /users

  //DELETE /users/:id
}