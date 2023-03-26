const express = require('express');
const user = require('../controllers/user.controller');
const  passport = require('passport');
const passportConfig = require('../middlewares/passport');



const router = express.Router();
router.route('/')
    .get(user.getALLUser)
router.route('/register')
    .post(user.Register)

router.route('/login')
    .post(passport.authenticate('local', {session:false}), user.Login)  
      
router.route('/:id')
    .get(user.getUser)
    .put(user.updateUser)
    .delete(user.deleteUser)


module.exports = router