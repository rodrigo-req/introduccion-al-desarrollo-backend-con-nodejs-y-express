const express = require('express');

const usersController = require('../../controllers/v1/users-controller');

const router = express.Router();

router.post('/create', usersController.createUser);
router.post('/update', usersController.updateUser);
router.post('/delete', usersController.deleteUser);

//Al no realizar ningun cambio, seria conveniente que el request sea de tipo GET
router.get('/get', usersController.getUsers);

module.exports = router;