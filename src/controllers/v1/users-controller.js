const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  console.log("req.body", req.body)

  
};

const deleteUser = (req, res) => {
  res.send({status:"OK", message: "User deleted!"});
};

const getUsers = (req, res) => {
  res.send({status:"OK", data: []});
};

const updateUser = (req, res) => {
  res.send({status:"OK", message: "User updated!"});
};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
};
