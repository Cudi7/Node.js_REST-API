import express from 'express';
import findUser from '../middleware/findUser.js';
import registerController from '../mvc/controllers/registerController.js';

const route = express.Router();

route.get('/', (req, res) => {
  res.render('register.ejs');
});

route.post('/newuser', findUser, registerController, (req, res) => {
  const message = res.existingUser
    ? `Email: ${res.existingUser[0].email} already in use`
    : `Hello ${res.newUser.name} your account has been created!`;

  res.send(message);
});

export default route;