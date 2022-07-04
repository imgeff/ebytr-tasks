const userDB = {
  id: 3,
  name: 'teste',
  email: 'teste@teste.com',
  password: 'teste123'
}

const statusDb = {
  id: 3,
  name: 'pronto',
}

const task = {
  userId: 1,
  statusId: 2,
  task: 'Corrigir bug da linha 80',
}

const invalidTask = {
  userId: 0,
  statusId: 0,
  task: 'b',
};

module.exports = {
  userDB,
  statusDb,
  task,
  invalidTask,
}
