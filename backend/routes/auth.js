const express = require('express');
const router = express.Router();
const {signupController, loginController, registrationController}= require('../controllers/user'); 

router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/register', registrationController)

module.exports = router;
