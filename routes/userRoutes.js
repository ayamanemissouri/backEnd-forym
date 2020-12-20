const express = require('express');
const router = express.Router();

let  userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.get('/user/:userId', userController.getUser);
router.post('/user', userController.addUser);
router.put('/user/:userId', userController.modifyUser);
router.delete('/user/:userId', userController.removeUser);


module.exports=router;