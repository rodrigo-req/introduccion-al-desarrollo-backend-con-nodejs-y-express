const createUser = (req, res) => {
  res.send({status:"OK", message: "User created!"})
};

const deleteUser = (req, res) => {};

const getUsers = (req, res) => {};

const updateUser = (req, res) => {};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
};
