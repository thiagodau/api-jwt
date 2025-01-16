const users = [
  { id: '1', name: 'thiago', email: 'thiago@email.com', password: '123456', role: 'admin' },
  { id: '2', name: 'jose', email: 'jose@email.com', password: '123456', role: 'standart' },
  { id: '3', name: 'ana', email: 'ana@email.com', password: '123456', role: 'standart' },
  { id: '4', name: 'pedro', email: 'pedro@email.com', password: '123456', role: 'standart' },
]

module.exports = {
  getAllUsers: () => users,
  getUserById: (id) => users.find(user => user.id === id),
  getByEmail: (email) => users.find(user => user.email === email),
  registerUser: (name, email, password) => {
    const userAlreadyRegistered = users.find(user => user.email === email)

    if(userAlreadyRegistered) return null

    const newUser = {
      id: Math.floor(Math.random() * 999999).toString(),
      name,
      email,
      password,
      role:'standart',
    };

    users.push(newUser);
    return newUser;
  },
  createUser: (name, email, password, role) => {
    const userAlreadyRegistered = users.find(user => user.email === email)

    if(userAlreadyRegistered) return null

    const newUser = {
      id: Math.floor(Math.random() * 999999).toString(),
      name,
      email,
      password,
      role
    };

    users.push(newUser);
    return newUser;
  },
  deleteUser: (id) => {
    const userIndex = users.findIndex(user => user.id === +id)
    if(userIndex === -1) return null
    const [deletedUser] = users.splice(userIndex, 1);
    return deletedUser;
  }
};  