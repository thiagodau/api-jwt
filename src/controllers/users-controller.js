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
  save: (req, res) => {
    const { name, email, password, role } = req.body
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      typeof role !== 'string' ||
      !role.match(/^(admin|standart)$/)
    ) {
      res.status(400).json({ error: 'Invalid fields' });
    }

    const newUser = users.createUser(name, email, password, role)
    if (!newUser) return res.status(400).json({ message: 'E-mail already registered' });

    res.status(201).json(newUser)
  },
  //DELETE /users/:id
  delete: (req, res) => {
    const { id } = req.params
    const user = users.getUserById(id)
    if (!user) return res.status(404).json({ message: 'User not found' });
    const deletedUser = users.deleteUser(id)
    console.log(deletedUser)
    if (!deletedUser) return res.status(400).json({ message: 'Couldn.t delete user' });
    res.status(200).json(deletedUser)
  }
}