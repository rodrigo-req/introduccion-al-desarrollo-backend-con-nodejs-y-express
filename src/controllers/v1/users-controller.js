/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const Users = require("../../mongo/models/users")

// const createUser = (req, res) => {
//   console.log('req.body', req.body);

//   // Necesito pasar un parametro password en el request.
//   bcrypt.hash(req.body.password, 15, (err, hash) => {
//     // Store hash in your password DB.
//     if (err) {
//       res.status(505).send({status: "Error", message: 'Invalid password!'});
//       console.log('Error al generar contraseña!');
//     } else {
//       // Siendo el hash la password a almacenar.
//       console.log('Contraseña generada:', hash);

//       res.status(200).send({status: "Success", data: hash});
//     }
//   });
// };

/*
  Convertimos la funcion en ASINCRONA, para que en caso de existir un error, no se intente mandar el hash como respuesta (ya que se envio un 505 anteriormente)
*/
const createUser = async (req, res) => {
  try {
    /*
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    */

    /*
    const { username } = req.body;
    const { password } = req.body;
    const { email } = req.body;
    */
    const { username, password, email, data } = req.body;
    const hash = await bcrypt.hash(password, 15);

    res.status(200).send({ status: 'OK', data: hash });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 'Error', message: error.message });
  }
};

const deleteUser = (req, res) => {
  res.send({ status: 'OK', message: 'User deleted!' });
};

const getUsers = (req, res) => {
  res.send({ status: 'OK', data: [] });
};

const updateUser = (req, res) => {
  res.send({ status: 'OK', message: 'User updated!' });
};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
};
